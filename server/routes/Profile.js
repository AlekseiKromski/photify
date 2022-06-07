const Router = require('express').Router();
const Profile = require('../models/Profile')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const TOKEN_DATE_ACCESS = Math.floor(Date.now() / 1000) + (600)
const TOKEN_DATE_REFRESH = (Date.now() / 1000) + (((60*60)*24)*30)

Router.post('/login', async (req,res) => {
    let email, password;
    if(req.body.email && req.body.password){
        email = req.body.email;
        password = req.body.password;

        let profile = await Profile.findOne({email: email}).exec();
        if(profile){
            let result = await bcrypt.compare(password, profile.password)
            if(result){
                return user_token_proccess(res, profile)
            }
        }

    }
    res.status(500).json({"message": "Incorrect email or password"})

})
Router.post('/register', async (req,res) => {
    let email, password, password_confirmation, nickname;
    if(req.body.email && req.body.password && req.body.password_confirmation){
        email = req.body.email;
        password = req.body.password;
        password_confirmation = req.body.password_confirmation;
        nickname = req.body.nickname;

        if(password_confirmation === password){
            let profile = await Profile.findOne({email: email}).exec();
            if(!profile){

                await bcrypt.hash(password, 10, async function(err, hash) {
                    if(err){
                        console.log('Problem with hashing password')
                        return res.status(500).json({"message": "Server error"})
                    }
                    let profile
                    try{
                        profile = await Profile.create({
                            nickname: nickname ? nickname : email,
                            email: email,
                            password: hash,
                            description: "",
                            followers: [],
                            followed: [],
                            count_points: 0,
                            posts: [],
                            refresh_token: ""
                        })
                    }catch (e){
                        console.log('Problem with user creation')
                        console.log(e)
                        return res.status(500).json({"message": "Server error"})
                    }

                    delete profile.password
                    return user_token_proccess(res, profile)

                });
            }else{
                res.status(500).json({"message": "This email already registered"})
            }
        }else{
            res.status(500).json({"message": "Password not confirmated"})

        }

    }else{
        res.status(500).json({"message": "All field is required"})
    }

})

function user_token_proccess (res, Profile){
    let profile_excluded = user_exclude_params(['password', 'refresh_token'], Profile)

    jwt.sign({ user: profile_excluded, exp: TOKEN_DATE_ACCESS}, process.env.SECRET_KEY, async function(err, access_token) {
        if(err){
            console.log(err)
            console.log('Token access token generation error')
            return res.status(500).json({"message": "Server error"})
        }


        try {

            jwt.verify(Profile.refresh_token, process.env.SECRET_KEY);
        } catch(err) {
            let refresh_token = jwt.sign({ user: Profile, exp: TOKEN_DATE_REFRESH }, process.env.SECRET_KEY);
            if(!refresh_token){
                console.log('Token refresh token generation error')
                return res.status(500).json({"message": "Server error"})
            }
            Profile.refresh_token = refresh_token;
            await Profile.save();
            console.log('UPDATE / CREATE REFRESH')
        }


        //set access token to cookie
        res.cookie("token", access_token, {
            httpOnly: true,
        });
        return res.json(profile_excluded)

    });
}
function user_exclude_params(excludes, Profile){
    let newProfile = {}
    for(let key of Object.keys(Profile._doc)){
        let run = true
        for(let exclude of excludes){
            if(exclude == key){
                run = false;
            }
        }
        // eslint-disable-next-line no-unused-expressions
        run ? newProfile[key] = Profile[key] : null
    }
    return newProfile
}
module.exports = Router;