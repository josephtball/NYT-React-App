// node packages
var express = require('express');
var mongoose = require('mongoose');

// models
var Article = require('../models/Article.js');
var Note = require('../models/Note.js');

// setup router
var router = express.Router();

router.route('/saved')
	.get(function(req, res) {
		Article.find({}, function(err, doc) {
			if(err) {
				console.log(err);
			} else {
				res.send(doc);
			}
		});
	})
	.post(function(req, res) {
		var newArticle = new Article(req.body);

		newArticle.save(function(err, doc) {
			if (err) {
				console.log(err);
			} else {
				res.send(doc);
			}
		});
	})
	.delete(function(req, res) {

	});

module.exports = router;