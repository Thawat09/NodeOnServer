const express = require('express');
const app = express();
const port = 6672;

// สร้าง API endpoint ที่ส่งคำว่า "Hello, World!" กลับมา
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// เริ่มต้น Express server ที่ port 6672
app.listen(6672, 'http://159.138.235.143/', () => {
    console.log(`Server is running on http://159.138.235.143:6672`);
  });