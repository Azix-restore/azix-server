var config = require('../lib/config.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://' + config.dbhost + '/' + config.dbname);

var repoSchema = new Schema({
  user: { type: String, required: true },
  project: { type: String, required: true },
  endpoint: { type: String, required: true }
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports.Repo = Repo;