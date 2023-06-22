var http = require('http');
var fs = require('fs')


http.createServer(function (req, res) {
    fs.readFile("read.txt",function (data, err){
        res.writeHead(200, {'Content-Type': 'text/txt'});
    res.write(data);
    return res.end();
    })
  
}).listen(3000);


// console.log("i am kabeer here ")
// console.log(" i have three years of web developnment")

// const fs = require("fs")
// fs.writeFileSync('read.txt',"welcome to my channel")