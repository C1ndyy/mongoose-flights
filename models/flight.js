const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date,
}, {
    timestamps: true,
});
	
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },    
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },    
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },    
    depart: {
        type: Date,
        default: function() {
            newYear = new Date().getFullYear() + 1;
            return new Date().setFullYear(newYear)
        }
    },
    destinations: [destinationSchema],
    // tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]    
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);