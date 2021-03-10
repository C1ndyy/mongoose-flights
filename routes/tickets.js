var express = require('express');
var router = express.Router();

let ticketsCtrl = require('../controllers/tickets')

/* GET home page. */
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);


module.exports = router;