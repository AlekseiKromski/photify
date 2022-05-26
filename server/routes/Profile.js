const Router = require('express').Router();
const Profile = require('../models/Profile')

Router.get('/', async (req,res) => {
    await Profile.create({
        nickname: "test",
        description: "test",
        followers: 1,
        followed: 2,
        count_points: 1,
        posts: [],
        refresh_token: null
    })
    console.log('ok')
    res.json({msg: "ok"})
})

module.exports = Router;