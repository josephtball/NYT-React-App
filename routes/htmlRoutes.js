// node packages
var express = require('express');

// setup router
var router = express.Router();

router.get('/', function(req, res) {
	res.sendFile('../public/index.html');
});

module.exports = router;