const express = require('express');
const app = express();
const port = 6672;

// สร้าง API endpoint ที่ส่งคำว่า "Hello, World!" กลับมา
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// เริ่มต้น Express server ที่ port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});