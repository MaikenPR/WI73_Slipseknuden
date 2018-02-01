var express = require('express');
var router = express.Router();


// Garanti
router.get('/garanti', function (req, res) {
    let adresse = require('../data/adresse.json');
    // console.log(adresse);

    res.render('pages/garanti', {
        adresse: adresse
    })

});

module.exports = router; //module.exports nævnes her i bunden