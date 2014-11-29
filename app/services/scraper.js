var request    = require('request');
var cheerio    = require('cheerio');

//
// Scraper Service
// -----------------------------------

module.exports = function(url, callback) {

  request(url, function(error, response, html) {

    if (!error) {

      console.log('Response received. Scraper running.');

      var $ = cheerio.load(html);
      var data = {};

      data.criticsConsensus = $('.critic_consensus').html() ? $('.critic_consensus').html().trim() : 'No consensus';
      data.movieSynopsis = $($('#movieSynopsis').contents()[0]).text().trim() + $($('#movieSynopsis :not(a)').contents()[0]).text();
      data.imageURL = $('#poster_link img').attr('src');

      callback(null, data);

    }
    else {
      callback(error);
    }

  });

}
