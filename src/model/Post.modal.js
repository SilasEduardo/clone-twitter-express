const mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
    content: String, 
    user: String,
    Creante_date: Date,
    visible: Boolean,
});