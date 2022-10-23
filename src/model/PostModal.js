const mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
    content: String, 
    user: String,
    Creante_date: Date,
    visible: Boolean,
});


// const postInstance = new Post({
//     content: 'Este é um post novo', 
//     user: 'Silas',
//     Creante_date: new Date(),
//     visible: true,
// })

// postInstance.save()
// .then((value) => {
//     console.log(value)
// });