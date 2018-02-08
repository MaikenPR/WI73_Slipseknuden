var express = require('express');
var router = express.Router();
var log = require('../my_modules/log.js');

// Garanti
router.get('/garanti', function (req, res) {
    log.writeLog('Garantiside besøgt');
    let adresse = require('../data/adresse.json');
    // console.log(adresse);

    res.render('pages/garanti', {
        adresse: adresse
    })

});

module.exports = router; //module.exports nævnes her i bunden