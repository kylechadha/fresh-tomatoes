var scraper = require('./services/scraper')

module.exports = function(app) {

  // Server Routes
  // ----------------------------------------------
  app.get('/api/movie/:url', function(req, res) {

    var url = req.params.url;
    console.log(url);

    scraper(url, function(error, data) {

      if (error) {
        res.send(error);
      }

      console.log('Data being sent');
      console.log(data);
      res.json(data);

    });

  });
  
  // Front End Routes
  // ----------------------------------------------
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our index.html file
  });

};
