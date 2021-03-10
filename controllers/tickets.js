const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

function newTicket (req, res) {
    res.render('tickets/new', {flightid: req.params.id})
}

async function createTicket (req, res) {
    try {
        let flight = await Flight.findById(req.params.id)
        console.log(flight)
        await Ticket.create({
            seat: req.body.seat,
            price: req.body.price,
            flight: flight
        })
        return res.redirect('/flights/'+ flight.id)
    }
    catch(err) {
        res.send(err)
    }
}

module.exports = {
    new: newTicket,
    create: createTicket,
}