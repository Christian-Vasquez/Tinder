// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var friend = [
  {
    Name: "Jhon Doe",
   	Photo: "happyface.jpg",
    Score: ["1","2","3","4","5","1","1","1","1","1"]
  },{
    Name: "Ahmed",
    Photo: "happyface.jpg",
    Score: ["5","1","4","4","5","1","2","5","4","1"]
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/friends", function(req, res) {
  res.json(friend);
});

app.post("/survey/api/friends", function(req, res) {
  var newFriend = req.body;
  var matchObj = {};

  //   //Add & insert Total Score of every friend in the array 
  // for(j=0; j < friend.length; j++){
  //   //Running trough each array to add the total differences
  //   for(i=0; i < friend[j].Score.length; i++){
  //      =  + Math.abs(newFriend.Score[i] - friend[j].Score[i]);
    
  //   }


  // }


  friend.push(newFriend);
  res.json(newFriend);
});

  // var newFriend = req.body,    
  //     friendCalc = [[],[]];

  // //Add & insert Total Score of every friend in the array 
  // for(j=0; j < friend.length; j++){
  //   //Running trough each array to add the total differences
  //   for(i=0; i < friend[j].Score.length; i++){
  //     friendCalc[j][0] = friendCalc[j][0] + Math.abs(newFriend.Score[i] - friend[j].Score[i]);
  //   }
  // }

  // for(n=1; n < friendCalc.length; n++){
  //   if( friendCalc[n-1] < friendCalc[n]){
  //     delete friendCalc[n];
  //   }
  //   else{
  //     delete friendCalc[n-1];
  //   }
  // }


  
  // if(tables.length < 5){
  //     tables.push(newRes);
  // } else{
  //     waitlist.push(newRes); 
  // }
  // res.json(newRes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
