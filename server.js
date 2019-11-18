// requires needed modules
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')



// sets port and express app
const app = express()
const PORT = process.env.PORT || 8080;



// Link to api routes
// require(path.join(__dirname,'./app/routing/apiRoutes.js'))(app)
require(path.join(__dirname,'./app/routing/htmlRoutes.js'))(app)




// declare middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


app.use('/static', express.static(path.join(__dirname, 'app/public')))

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });