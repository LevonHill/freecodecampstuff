// curl -k https://localhost:8000/
const https = require('node:https');
const fs = require('node:fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);

const multiplyNumbers = (number1 ,number2) =>{
    return number1 * number2;
}
console.log(multiplyNumbers(3, 4));
console.log(typeof multiplyNumbers);