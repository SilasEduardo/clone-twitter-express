const mongoose = require('mongoose')
module.exports = (url) =>{ mongoose.connect(url, {useNewUrlParser: true}).then(() => {
    console.log('DB CONNECTING')
    });
}