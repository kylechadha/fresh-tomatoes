var request    = require('request');
var cheerio    = require('cheerio');

//
// Scraper Service
// -----------------------------------

module.exports = function(url, callback) {

  // Load the Rotten Tomatoes URL to be scraped.
  request(url, function(error, response, html) {

    if (!error) {

      console.log('Response received. Scraper running.');

      // Use Cheerio to load the page.
      var $ = cheerio.load(html);

      var data = $;


      callback(null, data);

    }
    else {
      callback(error);
    }

  });

}
