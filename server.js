const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')



// Link to api routes
const apiRoutes = require('./app/routing/apiRoutes.js')
const htmlRoutes = require('./app/routing/htmlRoutes.js')


// sets port
const app = express()
const PORT = process.env.PORT || 8080;


// declare middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/static', express.static(path.join(__dirname, 'app/public')))

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });