var express = require('express');
var multer = require('multer');
var fs = require('fs');
var upload = multer({
    dest: '.tmp/'
});

var app = express();
app.listen(process.env.PORT);
app.use(express.static('public'));

app.post('/check', upload.single('user-file'), function (req, res) {
        res.json({'size':req.file.size});
        fs.unlink(req.file.path);
});