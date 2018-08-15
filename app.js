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


/* Serve
***********/
 
app.listen(3000, () => {
	console.log('Application listening on port 3000');
});