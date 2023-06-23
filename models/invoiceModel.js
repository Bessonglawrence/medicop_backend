const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
    },
    number:{
        type: Number,
        require: true
    },
    total:{
        type: Number,
        require: true
    },
    done:{
        type: Boolean,
        default: false
    },
    tests:{
        
            xRayTests:[{
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
        
            ctScanTests:[{
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
       
            ultraSounds:[{
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

            dopplerUltraSounds:[{
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

            specialProcedures:[{
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
            
            cardiologyTests:[{
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
    }

},{timestamps: true})

module.exports = mongoose.model('Invoice', invoiceSchema)