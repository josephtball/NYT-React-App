var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	url: {
		type: Date,
		required: true
	},
	notes: [{
		type: Schema.Types.ObjectId,
		ref: 'Note'
	}]
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;