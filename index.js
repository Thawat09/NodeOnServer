const express = require('express');
const rateLimit = require("express-rate-limit");
const app = express();
const indexAPI = require('./src/routes/index.js');

const limiter = rateLimit({
    windowMs: 3 * 60 * 1000,
    max: 5
});

app.use(limiter);
app.use(indexAPI);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

function name(params1, params2, params3, params4) {
    return params1 +
    params2 +
    params3 +
    params1;
}

name(
    'wedf',
    'qwfef',
    'wefw',
    '4frtrg'
)