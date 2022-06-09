const Router = require('express').Router();
const Post = require('../models/Post')
const Profile = require('../models/Profile')

Router.get('/get-all-posts', async (req, res) => {
    console.log(req.user._id)
    let profile = await Profile.findById(req.user._id).populate({
        path: "followed",
        populate: {
            path: 'posts',
            match: {deleted: false},
            populate: [{
                path: "comments",
                populate: {
                    path: "user",
                    select: 'nickname image description -_id'
                }
            }, {
                path: "user",
                select: 'nickname image description -_id'

            }],
        }
    }).exec();

    let posts = [];
    for(let follower of profile.followed){
        posts = [...posts, ...follower.posts]
    }

    res.status(200).json(posts)
})
module.exports = Router;