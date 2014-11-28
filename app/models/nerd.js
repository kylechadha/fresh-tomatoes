var mongoose = require('mongoose');

// Schema
// ----------------------------------------------

var nerdSchema = mongoose.Schema({

  text : String,
  category : String

});

module.exports = mongoose.model('Nerd', nerdSchema);
