const express = require('express');
const rateLimit = require("express-rate-limit");
const app = express();


const limiter = rateLimit({
    windowMs: 3 * 60 * 1000,
    max: 5
});

app.use(limiter);

app.get('/', (req, res) => {
    res.send('Hello User');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});