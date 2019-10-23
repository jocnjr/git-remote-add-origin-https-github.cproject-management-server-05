const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user-model');

const projectSchema = new Schema({
  title: String,
  description: String,
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: '5db068509523e48cfc7be3a4'
  },
  imageUrl: String
  // owner will be added later on
}, {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;