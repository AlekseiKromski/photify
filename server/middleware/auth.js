const jwt = require('jsonwebtoken')
const jwtDecode = require("jwt-decode");
const Profile = require('../models/Profile')
const TOKEN_DATE_ACCESS = Math.floor(Date.now() / 1000) + (600)
const TOKEN_DATE_REFRESH = (Date.now() / 1000) + (((60*60)*24)*30)

module.exports = async function (req,res,next){
    let token = req.cookies.token;
    let userId = (jwtDecode(token)).user._id
    let user = await Profile.findById(userId).select('-password');
    if(token && user){
        try{
            let decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = user;
            next();
        }catch (e){
            try {
                let refresh_token_verify = jwt.verify(user.refresh_token, process.env.SECRET_KEY);
                user = user_exclude_params(['refresh_token'], user)
                createToken(user, res)
                req.user = user;
                next();
            }catch (e){
                res.status(403).json({message: "you should be authorized"})
            }
        }
    }else{
        res.status(403).json({message: "you should be authorized"})
    }
}

function createToken(user, res){
    jwt.sign({ user, exp: TOKEN_DATE_ACCESS}, process.env.SECRET_KEY, async function(err, access_token) {
        if(err){
            console.log(err)
            console.log('Token access token generation error')
            return res.status(500).json({"message": "Server error"})
        }


        //set access token to cookie
        res.cookie("token", JSON.stringify(access_token), {
            httpOnly: true,
        });
        return true

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