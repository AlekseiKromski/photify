const Router = require('express').Router();
const Post = require('../models/Post')
const Profile = require('../models/Profile')
Router.get("/test", async (req,res) => {
    let post = await Post.create({
        image: '/img/posts/fineas-anton-8pKrkO2cx1A-unsplash.jpg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        comments: [],
        user: '629a164c208aa519f7c7e760'
    })

    let profile = await Profile.findById('629a164c208aa519f7c7e760');
    profile.posts.push(post);
    await profile.save();
    res.json("ok")
})

Router.get('/get-all-posts', async (req, res) => {
    let profile = await Profile.findById('none').populate({
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