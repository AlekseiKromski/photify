const env = require('dotenv').config();
const express = require('express');
const app = express()
const db = require('./db.connection.js')
const cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
const Profile_Router = require('./routes/Profile')
const Post_Router = require('./routes/Post')

const auth__middleware = require('./middleware/auth')

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/profile', Profile_Router);
app.use('/api/post',auth__middleware , Post_Router);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server was started at ${process.env.SERVER_PORT} port`)
})