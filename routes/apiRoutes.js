// node packages
var express = require('express');
var mongoose = require('mongoose');

// models
var Article = require('../models/article.js');
var Note = require('../models/note.js');

// setup router
var router = express.Router();

router.route('/saved')
	.get(function(req, res) {

	})
	.post(function(req, res) {

	})
	.delete(function(req, res) {

	});

module.exports = router;