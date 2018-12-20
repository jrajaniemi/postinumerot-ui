// Alusta express server
const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();

// jaellaan staattisia tiedostoja ./dist/ng-postinumerot/ -kansiosta
app.use(express.static('./dist/ng-postinumerot'));
app.use(cors());

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname, '/dist/ng-postinumerot/index.html'));
});

// laitetaan 8080-portti kuunteluun
app.listen(process.env.PORT || 8080);
