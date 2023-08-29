const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

// 存储已发布的公告
const notices = [];

app.post('/publish', (req, res) => {
    const notice = req.body.notice;

    if (notice) {
        notices.push(notice);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get('/notices', (req, res) => {
    res.json({ notices });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/input.html');
});

app.get('/output', (req, res) => {
    res.sendFile(__dirname + '/output.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
