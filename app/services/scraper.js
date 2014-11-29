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

      // console.log($('.critic_consensus').html());

      // May need to check if this exists before, run risk of undefined -- check on 'Octopus' movie
      data.criticsConsensus = $('.critic_consensus').html().trim();
      data.movieSynopsis = $($('#movieSynopsis').contents()[0]).text().trim() + $($('#movieSynopsis :not(a)').contents()[0]).text();
      data.imageURL = $('#poster_link img').attr('src');

      callback(null, data);

    }
    else {
      callback(error);
    }

  });

}
