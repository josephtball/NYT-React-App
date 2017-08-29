import axios from 'axios';

const helpers = {
	searchArticles: (topic, start, end, page) => {
		let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4924d0618ea04c3aa5f449fd4c16a340&q='+topic;
		
		start += '0101';
		url += '&begin_date='+start;
		end += '1231';
		url += '&end_date='+end;

		url += '&page='+page;
		return axios.get(url).then((response) => {
			return response.data.response.docs;
		});
	},
	saveArticle: (data) => {
		const article = {
			title: data.headline.main,
			url: data.web_url,
		}
		return axios.post('/api/article', article).then((response) => {
			return response;
		});
	},
	getArticles: () => {
		return axios.get('/api/article').then((response) => {
			return response.data;
		});
	},
	deleteArticle: (data) => {
		return axios.delete('/api/article/'+data._id).then((response) => {
			return response;
		});
	}
};

export default helpers;