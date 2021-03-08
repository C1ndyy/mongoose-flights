// require('../config/database')
const Flight = require('../models/flight');

function index (req, res) {
    // let allFlights = Flight.find({});
    // console.log(allFlights[0])
    res.render('flights/index',)
}

function newFlight (req, res) {
    res.render('flights/new')
}

async function create (req, res) {
    console.log(req.body)
    await Flight.create({
        airline: req.body.airline,
        airport: req.body.airport,
        flightNo: req.body.flightNo,
        depart: req.body.depart,
    })
    res.redirect('/flights')
}


module.exports = {
    index,
    new: newFlight,
    create,
}