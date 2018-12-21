// Alusta express server
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const sanitizer = require('sanitize')();


const app = express();

// jaellaan staattisia tiedostoja ./dist/ng-postinumerot/ -kansiosta
app.use(express.static('./dist/ng-postinumerot'));

// CORS-käyttöön
app.use(cors());

// Helmet-kirjasto käyttöön
app.use(helmet());

// HTTP -> HTTPS 301
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https')
    res.redirect(`https://${req.header('host')}${req.url}`)
  else
    next()
});

// Tarjoillaan postalcodes.json
app.get('/postalcodes.json', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/ng-postinumerot/postalcodes.json'));
});

// Tarjoillaan aina index.html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/ng-postinumerot/index.html'));
});

// laitetaan 8080-portti kuunteluun
app.listen(process.env.PORT || 8080);
