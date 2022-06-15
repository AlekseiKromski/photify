const Router = require('express').Router();
const Comment = require('../models/Comment')
const Post = require('../models/Post')
Router.post('/create-comment', async (req,res) => {
    try{
        let comment = await Comment.create({
            user: req.user._id,
            comment: req.body.comment
        })
        let post = Post.findById(req.body.postId,  async (err, doc) => {
            // eslint-disable-next-line no-unused-expressions
            err ? res.status(500).json({message:"server error"}) : null;

            doc.comments.push(comment);
            await doc.save();
        })
        res.json(comment)
    }catch (e){
        console.log(e)
        res.status(500).json({message:"server error"});

    }
})

module.exports = Router;