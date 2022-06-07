const Router = require('express').Router();
const Post = require('../models/Post')
const Profile = require('../models/Profile')

Router.get('/get-all-posts', async (req, res) => {
    let profile = await Profile.findById(req.user._id).populate({
        path: "followers",
        populate: {
            path: 'posts',
            match: {deleted: false},
            populate: {
                path: "user",
                select: 'nickname image description -_id'
            }
        }
    }).exec();


    let posts = [];
    for(let follower of profile.followers){
        posts = [...posts, ...follower.posts]
    }

    res.status(200).json(posts)
})
module.exports = Router;