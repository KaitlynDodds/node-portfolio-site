const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/about', (req, res) => {
	res.render('about');
});

router.get('/projects', (req, res) => {
	res.send('projects page');
});

router.get('/project/:id', (req, res) => {
	res.send(`project ${req.params.id}`);
});

module.exports = router;