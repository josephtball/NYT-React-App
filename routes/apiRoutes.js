// node packages
var express = require('express');
var mongoose = require('mongoose');

// models
var Article = require('../models/Article.js');

// setup router
var router = express.Router();

router.route('/article/:id?')
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
		req.body.date = new Date();
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
		console.log('hit delete')
		console.log(req.params.id);
		Article.findByIdAndRemove(req.params.id, function(err, doc) {
			if(err) {
				console.log(err);
			} else {
				res.send(doc);
			}
		});
	});

module.exports = router;