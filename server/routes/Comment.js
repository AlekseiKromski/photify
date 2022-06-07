const Router = require('express').Router();
const Comment = require('../models/Comment')
Router.get('/test', async (req,res) => {
    await Comment.create({
        comment: "Wow, so awesome!",
        user: '629a17d1208aa519f7c7e764',
    })
})

module.exports = Router;