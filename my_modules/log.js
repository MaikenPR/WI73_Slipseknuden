const fs = require("fs");

exports.writeLog = function (tekst) {
    fs.appendFile("./log/log.txt", tekst + "\r\n", function (err) {
        if (err){
            console.error(err);
        } else{
            console.log("skrevet til log");
        }
    })
}