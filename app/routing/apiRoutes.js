//* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//look at star wars 6
  //define a var that has a path to friends.js--call it friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriends = req.body;
  
    console.log(newFriends);
  
    // We then add the json the user sent to the character array
    friend.push(newFriends);
  
    // We then display the JSON to the users
    res.json(newFriends);
  });



  