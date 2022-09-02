const express = require('express');
const app = express();
app.use(express.static(__dirname + '/templ'));


app.get('/', (req, res) => {
    res.sendfile('./templ/Home.html');
});
app.get('/Experience', (req, res) => {
    res.sendfile('./templ/Working.html');
});

app.all('*', (req, res) => {
    res.status('404').sendfile('./templ/404.html');
});

app.listen(3000);