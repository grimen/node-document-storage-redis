# NODE-DOCUMENT-STORAGE-REDIS [![Build Status](https://secure.travis-ci.org/grimen/node-document-storage-redis.png)](http://travis-ci.org/grimen/node-document-storage-redis)

**Storage** adapter [redis](http://redis.io) for [node-document](https://github.com/grimen/node-document) ODM for Node.js.


## Installation

```shell
  $ npm install node-document-storage-redis
```


## Usage

**Basic:**

```javascript
  var Storage = require('node-document-storage-redis');

  var storage = new Storage(); // Connect using defaults (i.e. `localhost`)

  var data = {
    keys: ['post/1', 'post/abc'],
    values: [{title: "foo", tags: ['foo', 'bar'], published: true}, {title: "bar", tags: ['baz'], published: false}]
  };

  var inspect = require('util').inspect;

  console.log('STORAGE: `%s`', storage.name);
  console.log('\nURL: `%s`', storage.url);

  storage.set(data.keys, data.values, function(errors, results) {
    console.log("\nSET  %s  ->  %s", inspect(data), inspect(results));

    storage.get(['post/1', 'post/abc'], function(errors, results) {
      console.log("\nGET  %s  ->  %s", data.keys, inspect(results));

      storage.del(['post/1', 'post/abc'], function(errors, results) {
        console.log("\nDEL  %s  ->  %s", data.keys, inspect(results));

        storage.get(['post/1', 'post/abc'], function(errors, results) {
          console.log("\nGET  %s  ->  %s", data.keys, inspect(results));
        });
      });
    });
  });
```

For details; see [node-document](https://github.com/grimen/node-document).


## Test

**Local tests:**

```shell
  $ make test
```

**Remote tests:**

```shell
  $ make test-remote
```


## License

Released under the MIT license.

Copyright (c) [Jonas Grimfelt](http://github.com/grimen)
