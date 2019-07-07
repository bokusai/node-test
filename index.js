var express = require('express');
var ejs = require('ejs');

var app = express();

app.engine('ejs', ejs.renderFile);


app.get('/', (req, res) => {
	var renderData = {
		title: 'Index',
		content: 'This is node-test Top page!',
	};
	res.render('./index.ejs', renderData);
});

app.listen(3000, () => {
	console.log('Start server port:3000');
})
