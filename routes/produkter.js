var express = require('express');
var router = express.Router();


// Forsides
router.get('/produkter', function (req, res) {
	let adresse = require('../data/adresse.json');
	let slips = require('../data/slips.json');

	// console.log(slips);
	res.render('pages/produkter', {
		slips:slips,
		adresse: adresse
	});

});

module.exports = router; //module.exports nævnes her i bunden