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

async function show (req, res) {
    try{
        let flight = await Flight.findById(req.params.id);
        flight.destinations.sort((a,b) => (a.arrival - b.arrival ))
        res.render('flights/show', {flight: flight})
    }
    catch(err) {
        res.send("there was an error")
    }
}

async function addDestination (req, res) {
    try {
        let flight = await Flight.findById(req.params.id)
        flight.destinations.push(req.body)
        await flight.save()
        return res.redirect('/flights/'+ flight.id)
    }
    catch (err) {
        res.send("there was an error")
    }
}

async function deleteDestination (req, res) {
    try {
        let flight = await Flight.findById(req.params.id)
        let destination = flight.destinations.id(req.params.destinationId)
        destination.remove()
        await flight.save()
        return res.redirect('/flights/'+ flight.id)
    }
    catch (err) {
        res.send("there was an error")
    }

}



module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addDestination,
    deleteDestination,
}