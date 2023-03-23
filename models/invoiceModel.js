const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    number:{
        type: Number,
        require: true
    },
    tests:[
        {
            category:{
                type: String,
            },
            testName:{
                type: String,
            },
            testPrice:{
                type: Number,
            }
        }
    ],
    invoicePrice:{
        type: Number,
        require: true
    }

},{timestamps: true})

module.exports = mongoose.model('Invoice', invoiceSchema)