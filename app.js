const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connection
mongoose.connect(config.database);

//check if we connect to database
mongoose.connection.on('connected', () => {
	console.log('Connected to database'+config.database);
});
//Check connectio error
mongoose.connection.on('error', (err) => {
	console.log('Database error'+config.database);
});

//intialize our app variable
const app = express();
// './routes/users' is the name of folder
const users = require('./routes/users');
//intialize the port
const port = 3000;

//body parser Middleware
app.use(bodyParser.json());

//to use cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', users);
//Set the route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

//our app will listen in port(3000) and start server
app.listen(port, () => {
	console.log('Server started on port ' + port);
});

