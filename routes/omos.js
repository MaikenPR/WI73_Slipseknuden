var express = require('express');
var router = express.Router();


// Om Slipseknuden
router.get('/omos', function (req, res) {
    let adresse = require('../data/adresse.json');
    let medarbejdere = require('../data/medarbejdere.json');
    // console.log(medarbejdere);

    res.render('pages/omos', {
        medarbejdere: medarbejdere,
        adresse: adresse 
    })

});

module.exports = router; //module.exports nævnes her i bunden