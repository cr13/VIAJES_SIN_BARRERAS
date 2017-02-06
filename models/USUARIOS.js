var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require ('jsonwebtoken')
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
	salt: { type: String}
});

userSchema.methods.setPassword = function(password){
	console.log(password)
  this.salt = crypto.randomBytes(16).toString('hex');
  this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password) {
	console.log(typeof password);
	//this.salt = crypto.randomBytes(16).toString('hex');
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
	//console.log(hash);
  return this.password === hash;
};
userSchema.methods.generarToken=function(){
	var caducidad=new Date()
	caducidad.setDate(caducidad.getDate()+7)
	console.log(this.role);
	return jwt.sign({
		_id: this._id,
		nick: this.name,
		name: this.username,
		email: this.email,
		tipo_usu: this.role,
		exp: parseInt(caducidad.getTime()/1000),
	},"UnaClave")
}
module.exports=mongoose.model('usuarios', userSchema);
