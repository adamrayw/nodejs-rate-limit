const express = require('express');
const customRateLimitter = require('./customRateLimitter');

const app = express();

app.get('/', (req, res) => {
    res.send('example of rate limit');
})

// limit the number of request to about page to 5 per minute 
const limitAboutPage = customRateLimitter(60 * 1000, 5, 'you can only visit about page 5 times per minute');

app.get('/about', limitAboutPage, (_, res) => {
    res.send('welcome to about page');
}
)

app.listen(3000, () => {
    console.log('server is running on port 3000');
})