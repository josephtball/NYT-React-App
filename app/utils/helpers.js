var axios = require("axios");

module.exports = {
	searchArticles: function(topic, start, end, page) {
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4924d0618ea04c3aa5f449fd4c16a340&q="+topic;
		if (start != undefined) {
			start += '0101';
			url += '&begin_date='+start;
		}
		if (end != undefined) {
			end += '1231';
			url += '&begin_date='+end;
		}
		url += '&page='+page;
		return axios.get(url);
	}
};