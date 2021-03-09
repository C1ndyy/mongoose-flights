// require('../config/database')
const Flight = require('../models/flight');

async function index (req, res) {
    try {
        let allFlights = await Flight.find({})
            .sort('depart');
        res.render('flights/index', {allFlights: allFlights})
   }
   catch (err) {
       console.log(err)
       return res.send("there was an error")
   }
}

function newFlight (req, res) {
    const newFlight = new Flight();
    const dt = newFlight.depart.toISOString().slice(0,16);
    console.log(dt)
    res.render('flights/new', {dt})
}

async function create (req, res) {
    console.log(req.body)
    try {
        await Flight.create({
            airline: req.body.airline,
            airport: req.body.airport,
            flightNo: req.body.flightNo,
            depart: req.body.depart,
        })
    }
    catch (err) {
        console.log(err)
        return res.render('flights/new')
    }
    res.redirect('/flights')
}


module.exports = {
    index,
    new: newFlight,
    create,
}