const mongooseDeletePlugin = require('mongoose-delete')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Message = new Schema({
    text: {
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

Message.plugin(mongooseDeletePlugin)

module.exports = mongoose.model("Message", Message)