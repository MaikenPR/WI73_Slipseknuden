var express = require('express');
var router = express.Router();


// Forsides
router.get('/', function (req, res) {
	let adresse = require('../data/adresse.json');
	let slips = require('../data/slips.json');
	let slipsOutput = slips.slice(0,3);

	// console.log(slipsOutput);
	res.render('pages/forside', {
		slips:slipsOutput,
		adresse: adresse
	});

});

module.exports = router; //module.exports nævnes her i bunden