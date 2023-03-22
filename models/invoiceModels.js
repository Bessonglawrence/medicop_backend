const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true,
        min: Date.now,
    },
    time:{
        type: Date,
        default: Date.now,
        required: true
    },
    tests:[
        {
            category: String,
            testName: String,
            testPrice: Number,
        }
    ]

},{timestamps: true})

module.exports = mongoose.model('Invoice', invoiceSchema)