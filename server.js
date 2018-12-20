// Alusta express server
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// jaellaan staattisia tiedostoja ./dist/ng-postinumerot/ -kansiosta
app.use(express.static('./dist/ng-postinumerot'));

// CORS-käyttöön
app.use(cors());

// HTTP -> HTTPS 301
app.use((req, res, next) => {
  console.log(req.header);
  if (req.header('x-forwarded-proto') !== 'https')
    res.redirect(`https://${req.header('host')}${req.url}`)
  else
    next()
});

// Tarjoillaan postalcodes.json
app.get('/postalcodes.json', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/ng-postinumerot/postalcodes.json'));
  console.log('postalcodes ' + Date.now());
});

// Tarjoillaan aina index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/ng-postinumerot/index.html'));
  console.log('index ' + Date.now());
});

// laitetaan 8080-portti kuunteluun
app.listen(port, () => {
  // Success callback
  console.log(`Listening at http://localhost:${port}/`);
});
