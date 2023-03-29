const InvoiceModel = require('../models/invoiceModel');
const mongoose = require('mongoose');


// GET all Invoices

const getInvoices = async (req, res) =>{
    res.set('Access-Control-Allow-Origin','*');
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


module.exports = {
    getInvoices,
    createInvoice
}