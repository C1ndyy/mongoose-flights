var express = require('express');
var router = express.Router();

let flightsCtrl = require('../controllers/flights')

/* GET home page. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.post('/:id/destinations', flightsCtrl.addDestination);
router.delete('/:id/destinations/:destinationId', flightsCtrl.deleteDestination)

module.exports = router;
