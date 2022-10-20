
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
