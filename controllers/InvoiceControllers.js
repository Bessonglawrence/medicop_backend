const InvoiceModel = require('../models/invoiceModel');
const mongoose = require('mongoose');


// GET all Invoices

const getInvoices = async (req, res) =>{

 try{
    const invoices = await InvoiceModel.find({}).sort({createdAt: -1});
    res.status(200).json(invoices)
 }
 catch(error){
    res.status(500).json(error);
 }
}

//POST an Invoice

const createInvoice = async (req, res) =>{
    const { name, email, number,total, tests } = req.body;
    try{
        const invoice = await InvoiceModel.create({ name, email, number,total, tests })
        res.status(200).json(invoice);
    }
    catch(error){
        res.status(500).json({error: error.body})
    }
}

// UPDATE an Invoice

const updateInvoice = async(req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }
    const invoice = await InvoiceModel.findOneAndUpdate({_id: id},{...req.body})
    if(!invoice){
        return res.status(404).json({error: "Workout doesn't exist"})
    }
    res.status(200).json(invoice)
}

// GET a single Invoice

const getInvoice = async (req, res) => {
    const { id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such workout"})
    }
    const invoice = await InvoiceModel.findById(id)
    if(!invoice){
        return res.status(500).json({error: "Workout doesn't exist"})
    }
    res.status(200).json(invoice);
}


module.exports = {
    getInvoices,
    createInvoice,
    getInvoice,
    updateInvoice
}