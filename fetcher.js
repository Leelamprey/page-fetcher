const fs = require("fs");
const request = require('request');


const path = process.argv[3];
const domain = process.argv[2];

request(domain, (err, resp, bod) => {
  if (error) {
    console.log('error:', err);
  }
  fs.writeFile(`${path}`, bod, function(err) {
    if (err) {
      console.log("error:", err);
    } else {
      console.log(`Downloaded  ${resp.headers["content-length"]} bytes to ${path}`);
    }
  });
});