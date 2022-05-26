const mongooseDeletePlugin = require('mongoose-delete')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Chat = new Schema({

    user_1: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    },
    user_2: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    }],
    created: {
        type: Date
    },
    update: {
        type: Date
    }
})

Chat.plugin(mongooseDeletePlugin)

module.exports = mongoose.model("Chat", Chat)