const Flight = require('../models/flight');

function index (req, res) {
    res.send("Index Page")
}

function newFlight (req, res) {
    res.render('flights/new')
}

function create (req, res) {
    res.send("Thank you for Submitting")
}


module.exports = {
    index,
    new: newFlight,
    create,
}