// const http = require('http');
// const express = require('express');
// const app = express();
// const server = http.createServer(app);
// server.listen(3000);
const fs = require('fs');
let fileWrite = () => {
    let str = "warAxe";
    fs.writeFile('./log.txt', str+" #PaapaPlayer", (err) => {
        if(!err)
        {
            console.log("Success!!!");
        }
        else
        {
            throw err;
        }
    })
};
fileWrite();