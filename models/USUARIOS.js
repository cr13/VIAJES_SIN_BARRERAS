var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema   = new Schema({
	name: String,
  email: String,
  DNI: { type: String, required: true, index: { unique: true }},
	username: { type: String, required: true, index: { unique: true }},
	password: { type: String, required: true, select: false },
	role: {
    type: String,
    enum: ['Admin', 'Basic'],
    default: 'Basic'
  }
});

module.exports=mongoose.model('usuarios', userSchema);
