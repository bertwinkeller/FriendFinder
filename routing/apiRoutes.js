
const friendsData = require('../data/friends.js');




module.exports = function(app){
app.get('/api/friends', function(req, res) {
    console.log(friendsData);
    console.log('blahhhh')
    
});


app.post('/api/friends', function(req,res){
// convert each users data into an array of numbers



});
}