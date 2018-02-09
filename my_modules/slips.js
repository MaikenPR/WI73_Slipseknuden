const fs = require('fs');

module.exports = {
    writeJSON: () => {
        var obj = {
            slips: []
        };


        // console.log(obj);
        var json = JSON.stringify(obj, null, 2);

        fs.writeFile('./data/testSlips.json', json, function (err) {
            if (err) throw err;
            // console.log('json ok');
        })
    },

    addJSON: (billede, type, navn, beskrivelse, pris) => {
        fs.readFile('./data/testSlips.json', 'utf8', function (err, data) {
            if (err) console.error(err)
            else {
                let obj = JSON.parse(data);
                obj.slips.push({
                    "Billede": billede,
                    "Type": type,
                    "Navn": navn,
                    "Beskrivelse": beskrivelse,
                    "Pris": pris
                });
                let json = JSON.stringify(obj, null, 2);

                fs.writeFile('./data/testSlips.json', json, 'utf8', function (err) {
                    if (err) throw err;
                    console.log('obj indsat');
                })
            }
        })
    },

    updateJSON: (index, pris) => {
        fs.readFile('./data/testSlips.json', 'utf8', function (err, data) {
            if (err) console.error(err)
            else {
                let obj = JSON.parse(data);
                
                obj.slips[index].Pris = pris;

                let json = JSON.stringify(obj, null, 2);

                fs.writeFile('./data/testSlips.json', json, 'utf8', function (err) {
                    if (err) throw err;
                    console.log('obj opdateret');
                })
            }
        })
    },

    deleteObj: (beginFrom, delteNext) => {
        fs.readFile('./data/testSlips.json', 'utf8', function (err, data) {
            if (err) console.error(err)
            else {
                let obj = JSON.parse(data);
                
                obj.slips.splice(beginFrom, delteNext);

                let json = JSON.stringify(obj, null, 2);

                fs.writeFile('./data/testSlips.json', json, 'utf8', function (err) {
                    if (err) throw err;
                    console.log('obj opdateret');
                })
            }
        })
    },

}
