var Nerd = require('./models/nerd');

module.exports = function(app) {

  // Server Routes
  // ----------------------------------------------

  app.get('/api/nerds', function(req, res) {
    Nerd.find(function(err, nerds) {

      if (err) {
        res.send(err);
      }

      res.json(nerds); // return all nerds in JSON format
    });
  });

  // app.post
  // app.delete

  
  // Front End Routes
  // ----------------------------------------------
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });

};


// Route Middleware
function isLoggedIn(req, res, next) {

  // If authenticated, proceed
  if (req.isAuthenticated()) {
    return next();
  }

  // If not, redirect them to login
  res.redirect('/login');

}
