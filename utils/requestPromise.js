const request = require('request');

const obj = {};
const keys = ['get', 'post', 'put', 'delete'];

keys.forEach(key => {
  obj[key] = (options) => {
    return new Promise((resolve, reject) => {
      request[key](options, (err, httpResponse, body) => {
        if (err) {
          return reject(err);
        }
        resolve(body);
      });
    })
  }
});

module.exports = obj;
