const express 		= require('express');
const router 		= express.Router();

const { projects } 	= require('../data.json');

/* Routes
***********/

router.get('/', (req, res) => {
	res.render('index', { projects });
});

router.get('/about', (req, res) => {
	res.render('about');
});

router.get('/project/:id', (req, res) => {
	const project = projects[req.params.id];
	if (!project) {
		throw new Error('Unable to find resource');
	}
	res.render('project', { project });
});

module.exports = router;