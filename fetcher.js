const fs = require('fs');

const request = require('request');
request(process.argv[2], (error, response, body) => {
  const content = body;
  console.log(`Downloaded and saved ${body.length} bytes to ${process.argv[3]}`)

  fs.writeFile(process.argv[3], content, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
