var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  description: {type: String, index:true, required:true},
  completed: {type: Boolean,default: false},
  completionDate: {type:Date}
}, {timestamps: true});

TaskSchema.methods.completeTask = function(){
  this.completed = true;
  this.completionDate = Date.now();
};
module.exports = mongoose.model('Task', TaskSchema);