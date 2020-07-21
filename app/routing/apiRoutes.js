//* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//look at star wars 6
//define a var that has a path to friends.js--call it friends
var fs = require("fs");
var friends = require("../data/friends.json");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriends = req.body;
    var totalDifference = 0;

    var newMatch = [];

    console.log(newFriends);

    for (let i = 0; i < friends.length; i++) {
      totalDifference = 0;
      for (let j = 0; j < friends[i].scores.length; j++) {
        totalDifference =
          totalDifference +
          Math.abs(friends[i].scores[j] - parseInt(req.body.scores[j]));
      }
      newMatch.push({
        name: friends[i].name,
        photo: friends[i].photo,
        totalDifference: totalDifference
      })
      
    }

    var updatedFriends = newMatch.sort((a, b) => {
      return a.totalDifference - b.totalDifference;
    });
    // We then add the json the user sent to the friends array
    friends.push(newFriends);
  

    fs.writeFile("./app/data/friends.json", JSON.stringify(friends),function(err) {
      if(err) throw err
      console.log(updatedFriends);
      // We then display the JSON to the users
     
    } )
    res.json(updatedFriends[0]);
  });
};
