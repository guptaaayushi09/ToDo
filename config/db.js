const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/newTodo').on('open', () => {
    console.log('mogoose connections set ');

}).on('error', () => { console.log('mogoose connections error  '); });
module.exports = connection;