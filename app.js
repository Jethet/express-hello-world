const express = require('express');
const port = 3000;

const app = express();  // creates server object
app.use(express.static('public'));

// ROUTES
// home route: '/'
app.get('/index', (req, res, next) => {   // only listens for GET request
    console.log('HTTP method', req.method);
    res.sendFile(__dirname + '/public/views/index.html')
});

app.get('/about', (req, res, next) => {
    res.sendFile(__dirname + '/public/views/index.html')
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

