const path = require('path')
const friends = require('../data/friends.js')

console.log(friends)


module.exports = function(app){
app.get('/api/friends', function(req, res) {
    res.json(friends);
});


app.post('/api/friends')
}