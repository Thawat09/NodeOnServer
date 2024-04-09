const express = require('express');
const app = express();
const port = 3000; // หรือพอร์ตที่คุณต้องการ

// เริ่มต้นเสิร์ฟเวอร์
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// สร้างเส้นทาง API
app.get('/api', (req, res) => {
    res.send('Hello World!');
});