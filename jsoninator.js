const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...


const stringify = function(obj) {

  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return `${obj}`
  } else if (_.isNull(obj)) {
    return 'null'
  } else if (typeof obj === 'string') {
    return "\"" + obj + "\""
  } else {

    let arr = [];

    if (Array.isArray(obj)) {

      if (_.isEmpty(obj)) return '[]';
      _.each(obj, el => arr.push(stringify(el)));
      return '[' + arr + ']';

    } else if (_.isObject(obj)) {
      if (_.isEmpty(obj)) return '{}';
      let obj2 = {};

      let check = _.every(obj, val => {
        Array.isArray(val) || _.isObject(val)
      });

      if (!check) {
        for (let key in obj) {
          obj2[key] = obj[key];
          return '{\"' + key + "\"" + ':' + "\"" + obj2[key] + '\"}';
        }
      } else {
        _.each(obj, val => {
          stringify(val);
        });
        for (let key in obj) {
          return '{\"' + key + "\"" + ':' + "\"" + obj2[key] + '\"}';
        }
      }
    }
  };
};


module.exports = {
  stringify: stringify
};
