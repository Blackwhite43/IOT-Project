const mongoose = require('mongoose');
const schemaName = new mongoose.Schema({
    distance: {
        type: Number
    }
}, {timestamps: true})

//YOU CAN ADD MIDDLEWARE UNDER HERE

const Schema = mongoose.model('Data-IOT-Model', schemaName);
module.exports = Schema;