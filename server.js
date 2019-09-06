'use strict';

var express = require('express');
var cors = require('cors');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));



app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });


app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
var img = req.file;
  //console.log(JSON.stringify(img.originalname),JSON.stringify(img))
  //console.log(JSON.stringify(img.originalname),JSON.stringify(img.mimetype),JSON.stringify(img.size))
  res.json({"name":img.originalname,"type":img.mimetype,"size":img.size});
})

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
