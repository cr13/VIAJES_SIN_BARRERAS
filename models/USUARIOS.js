var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var userSchema   = new Schema({
	name: String,
  email: String,
  DNI: { type: String, required: true, index: { unique: true }},
	username: { type: String, required: true, index: { unique: true }},
	password: { type: String, required: true},
	role: {
    type: String,
    enum: ['Admin', 'Basic'],
    default: 'Basic'
  },
	salt: String
});

userSchema.methods.setPassword = function(password){
	console.log(password)
  this.salt = crypto.randomBytes(16).toString('hex');
  this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
	console.log(hash);
  return this.password === hash;
};
module.exports=mongoose.model('usuarios', userSchema);
