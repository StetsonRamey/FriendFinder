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
    friendData.push(req.body);
    res.json(true);
  });
};
