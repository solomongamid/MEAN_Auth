const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const UserSchema = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

//create variable user to use it ouside
const User = module.exports = mongoose.model('User', UserSchema);

//create function to get user by id
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

//create function to get user by username
module.exports.getUserByUsername = function(username, callback){
	const query = {username: username}
	User.findByOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
		// bcrypt.hash(newUser.password, salt, (err, hash) => {
		// 	//check for the errors
		// 	if(err) throw err;
		// 	newUser.password = hash;
		// 	newUser.save(callback);
		// });
	});
}