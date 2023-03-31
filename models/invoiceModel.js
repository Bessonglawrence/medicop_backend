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
    total:{
        type: Number,
        require: true
    },
    tests:{
        
            bloodTest:[{
                id:{
                    type: Number
                },
                name:{
                    type: String,
                },
                price:{
                    type: Number,
                }
            }],
        
            boneTest:[{
                id:{
                    type: Number
                },
                name:{
                    type: String,
                },
                price:{
                    type: Number,
                }
            }],
       
            ultraSound:[{
                id:{
                    type: Number
                },
                name:{
                    type: String,
                },
                price:{
                    type: Number,
                }
            }]
    }

},{timestamps: true})

module.exports = mongoose.model('Invoice', invoiceSchema)