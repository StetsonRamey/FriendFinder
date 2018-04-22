// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require('../data/friends');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get('/api/friends', function(req, res) {
    res.json(friendData);
  });
  // HTML POST Requests
  // Below code handles form data and posts it
  // ---------------------------------------------------------------------------

  app.post('/api/friends', function(req, res) {
    // lets use a varible to make things easier
    var userForm = req.body;
    // console.log(userForm);

    // we just need scores
    var scores = userForm.scores;

    console.log('UserScores');
    console.log(scores);

    // set an empty array to hold the score differences of users
    var scoreDiff = [];
    var delta;
    var totalDiff = [];

    friendData.forEach((element, i) => {
      scores.forEach((element, j) => {
        totalDiff.push(Math.abs(parseInt(friendData[i].scores[i]) - parseInt(scores[j])));
      });
      
      console.log("Total Diff");
      console.log(totalDiff);
    });

    console.log('Score Diff');
    console.log(scoreDiff);

    // // push submitted data into our array
    // friendData.push(userForm);
    // res.json(true);
  });
};
