// const fs = require("fs");
const http = require("http")

const server = http.createServer((req, res) =>{
 
    res.end("hello from the other side");

})
server.listen(4000, ()=>{
    console.log("listing to the port number 3000");

})