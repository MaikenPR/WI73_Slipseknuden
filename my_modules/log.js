const fs = require("fs");

exports.writeLog = function (tekst) {
    var date = new Date();
    tekst = date + " " + tekst + "\r\n";
    fs.appendFile("./log/log.txt", tekst, function (err) {
        if (err){
            console.error(err);
        } else{
            // console.log("skrevet til log");
        }
    })
}