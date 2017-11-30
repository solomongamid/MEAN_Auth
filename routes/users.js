const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
//route Register
router.post('/register', (req, res, next) =>{
	//res.send('REGISTER'); //to print in the page REGISTER
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		passport: req.body.passport
	});

	//we have to create this function(addUser) inside the model(user.js)
	User.addUser(newUser, (err, user) => {
		if(err){
			res.json({success: false, msg:'Failed to register user'});
		} else{
			res.json({success: true, msg:'User registered'});
		}
	});
});

//route Authenticate
router.post('/authenticate', (req, res, next) =>{
	res.send('Authenticate');
});

//route Profile
router.get('/profile', (req, res, next) =>{
	res.send('PROFILE');
});



//we have to export the router
module.exports = router;