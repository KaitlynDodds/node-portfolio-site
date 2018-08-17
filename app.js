const express = require('express');
const app = express();

const routes = require('./routes');

/* Setup
***********/

app.set('view engine', 'pug');
app.use('/public', express.static('public'));


/* Routes
***********/

app.use(routes);


/* Middleware
***********/

// Catch server errors 
app.use((err, req, res, next) => {
	err.status = 500;
	
	res.render('error', { err })
});

// Catch 404s 
app.use((req, res, next) => {
	const err = new Error('Unable to resolve route');
	err.status = 404;

	res.render('error', { err });
});


/* Serve
***********/
 
app.listen(3000, () => {
	console.log('Application listening on port 3000');
});