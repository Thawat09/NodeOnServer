const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 6672;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});