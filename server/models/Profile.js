const mongooseDeletePlugin = require('mongoose-delete')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Profile = new Schema({
    nickname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    description: {
        type: String
    },
    followers: [{
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }],
    followed: [{
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }],
    count_points: {
        type: Number
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],
    refresh_token: {
        type: String
    },
    created: {
        type: Date
    },
    update: {
        type: Date
    }
})

Profile.plugin(mongooseDeletePlugin)

module.exports = mongoose.model("Profile", Profile)