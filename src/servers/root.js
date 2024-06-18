 require('dotenv').config();
 const path = require('path');
 const express = require('express');
 const bodyParser = require('body-parser');
 const hbs = require('express-handlebars');
 
 const app = express(); // create express app
 app.engine('hbs', hbs({
     extname: 'hbs',
     defaultLayout: 'layout',
     partialsDir: `${__dirname}/src/server/views/partials`,
     layoutsDir: `${__dirname}/src/server/views/layouts/`,
 }));
 
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'hbs');
 
 app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
     extended: true,
 }));
 app.use(bodyParser.json()); // to support JSON-encoded bodies
 
 app.use(express.static('build'));
 app.get('/*', (req, res) => {
     res.sendFile(path.join(__dirname, '../../build', 'index.html'));
 });
 
 // start express server on port 5000
 const port = process.env.PORT || 5500;
 app.listen(port, () => {
     console.log(`server started on port ${port}`);
 });
 
 app.use((req, res, next) => {
     const err = new Error('Not Found');
     err.status = 404;
     next(err);
 });
 