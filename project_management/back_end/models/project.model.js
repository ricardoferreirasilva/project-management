var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var ProjectSchema = new mongoose.Schema({
  name: {type: String, lowercase: true, required: [true, "can't be blank"], index: true, unique:true, minlength:3},
}, {timestamps: true});


// crypto.randomBytes(64).toString('hex');
module.exports = mongoose.model('Project', ProjectSchema);