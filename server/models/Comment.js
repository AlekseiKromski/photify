const mongooseDeletePlugin = require('mongoose-delete')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Comment = new Schema({
    comment: {
        type: String
    },
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

Comment.plugin(mongooseDeletePlugin)

module.exports = mongoose.model("Comment", Comment)