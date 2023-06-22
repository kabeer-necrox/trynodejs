// const { log } = require('console');
var http = require('http');

//create a server object:
http.createServer( (req, res) => {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(3500, ()=>{
    console.log("check this is working or not");
});