const mongoose = require('mongoose');

const Plants = mongoose.model (

    'plants',
    {
        name: String,
        likes_sun: Number,
        likes_water: Number,
        has_flowers: Boolean,
        has_thorns: Boolean,
        found_on_continent: Array,
        current_location: Object,
        last_watering_date: Date,
        created: Date
    },
    'plants'
)

module.exports = {
    Plants
}