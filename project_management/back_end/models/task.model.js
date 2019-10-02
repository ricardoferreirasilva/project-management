var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  description: {type: String,index:true},
}, {timestamps: true});

module.exports = mongoose.model('Task', TaskSchema);