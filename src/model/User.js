const mongoose = require('mongoose')

const {Schema, Types: {ObjectId}} = mongoose

const User = new Schema({
    name: {type: String, required: true },
    age: {type: Number, required: true },
    bio: {type: String, required: true },
    user: {type: String, required: false },
    location: {type: Object, required: false },
    posts: [{type: ObjectId, ref: 'Post'}],
    email: {type: String, required: true },
    profile_pic: {type: String, required: true },
    birth_date: {type: Date, required: false}
});

module.exports = mongoose.model('user', User)