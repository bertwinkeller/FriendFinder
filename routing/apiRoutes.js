
const friendsData = require('../data/friends.js');


const path = require('path')


module.exports = app => {
    app.get('/api/friends', function (req, res) {
        res.send(friendsData);
        res.sendStatus(200)

    });


    app.post('/api/friends', function (req, res) {
        // get user info
     
        // will be the index of the best matched friend
        let bestMatch = 0
        // default difference for comparing 
        let defaultDiff = 41
        for (let i = 0; i < friendsData.length; i++) {
          let totalDiff = 0
            for (let j = 0; j < friendsData[i].scores.length; j++) {
            //  calculating absolute difference from each different friend and user
              let difference = Math.abs(friendsData[i].scores[j] - req.body.scores[j])
              totalDiff += difference
            }
            if (totalDiff < defaultDiff) {
              defaultDiff = totalDiff
              bestMatch = i
            }
      }
    //  add user to friend list
      friendsData.push(req.body)
    //  send out best match
      res.json(friendsData[bestMatch])
      })
}