const Router = require('express').Router();
const Post = require('../models/Post')
const Profile = require('../models/Profile')
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img/posts/'))
    },
    filename: function (req, file, cb) {
        console.log(file)
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext;
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

Router.get('/get-all-posts', async (req, res) => {

    let profile = await Profile.findById(req.user._id).populate({
        path: "followed",
        populate: {
            path: 'posts',
            match: {deleted: false},
            populate: [{
                path: "comments",
                populate: {
                    path: "user",
                    select: 'nickname image description _id'
                }
            }, {
                path: "user",
                select: 'nickname image description _id'

            }],
        }
    }).exec();

    let posts = [];
    for(let follower of profile.followed){
        posts = [...posts, ...follower.posts]
    }

    res.status(200).json(posts)
})

Router.post('/create-post',upload.single('image'),async (req,res) =>{
    try{
        let filePublicPath = '/img/posts/' + req.file.filename;
        let post = await Post.create({
            comments: [],
            description: req.body.description,
            image: filePublicPath,
            user: req.user._id
        });
        req.user.posts.push(post)
        console.log(req.user.posts)
        await Profile.findByIdAndUpdate(req.user._id, {posts: [...req.user.posts]})
        res.status(200).json(post)
    }catch (e){
        console.log(e)
        res.status(500).json({message: "Server error"})
    }
})
module.exports = Router;