const mongooseDeletePlugin = require('mongoose-delete')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Post = new Schema({
    description: {
        type: String
    },
    image: {
        type: String
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    },
    created: {
        type: Date
    },
    update: {
        type: Date
    }
})

Post.plugin(mongooseDeletePlugin)

module.exports = mongoose.model("Post", Post)