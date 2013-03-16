
// -----------------------
//  Test
// --------------------

var Storage = require('node-document-storage');

module.exports = Storage.Spec('Redis', {
  module: require('..'),
  engine: require('redis'),
  id: 'redis',
  protocol: 'redis',
  db: 'default-test',
  default_url: 'redis://localhost:6379/default-test',
  authorized_url: 'redis://redistogo:57c5cf5c220a6b376cf3740297e0f69f@slimehead.redistogo.com:9501/test',
  unauthorized_url: 'redis://redistogo:123@slimehead.redistogo.com:9501/test',
  client: {
    get: function(db, type, id, callback) {
      var key = [db, type, id].join('/');

      var client = require('redis').createClient(6379, 'localhost');

      client.get(key, function(err, res) {
        callback(err, res);
      });
    },

    set: function(db, type, id, data, callback) {
      var key = [db, type, id].join('/');

      var client = require('redis').createClient(6379, 'localhost');

      client.set(key, data, function(err, res) {
        callback(err, res);
      });
    },

    del: function(db, type, id, callback) {
      var key = [db, type, id].join('/');

      var client = require('redis').createClient(6379, 'localhost');

      client.del(key, function(err, res) {
        callback(err, res);
      });
    },

    exists: function(db, type, id, callback) {
      var key = [db, type, id].join('/');

      var client = require('redis').createClient(6379, 'localhost');

      client.exists(key, function(err, res) {
        callback(err, res);
      });
    }
  }
});
