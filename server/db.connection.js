const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/photify').catch(e => {
    console.log("CAN'T CONNECT TO DATABASE")
}).then(resolve => {
    console.log("DATABASE WAS CONNECTED")
})
