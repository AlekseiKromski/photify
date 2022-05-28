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

        let Profile = await Profile.find({where: {email}}).get();
        if(Profile){
            let result = bcrypt.compare(password, Profile.password)
            if(result){
                delete Profile.password
                jwt.sign({ user: Profile, exp: TOKEN_DATE_ACCESS}, process.env.SECRET_KEY, { algorithm: 'RS256' }, async function(err, access_token) {
                    if(err){
                        console.log('Token access token generation error')
                        return res.status(500).json({"message": "Server error"})
                    }

                    try {
                        jwt.verify(Profile.refresh_token, process.env.SECRET_KEY);
                    } catch(err) {
                        let refresh_token = jwt.sign({ user: Profile, exp: TOKEN_DATE_REFRESH }, process.env.SECRET_KEY, { algorithm: 'RS256' });
                        if(refresh_token){
                            console.log('Token refresh token generation error')
                            return res.status(500).json({"message": "Server error"})
                        }
                        Profile.refresh_token = refresh_token;
                        await Profile.save();
                        console.log('UPDATE REFRESH')
                    }

                    res.json({user: Profile, token: access_token})

                });

            }
        }

    }
    res.status(500).json({"message": "Incorrect email or password"})

})

module.exports = Router;