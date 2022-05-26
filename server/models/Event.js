const mongooseDeletePlugin = require('mongoose-delete')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Event = new Schema({
    event: {
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

Event.plugin(mongooseDeletePlugin)

module.exports = mongoose.model("Event", Event)