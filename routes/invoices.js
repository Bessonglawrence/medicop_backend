const express = require('express');

const {
    getInvoices,
    createInvoice
} = require('../controllers/InvoiceControllers')

//Initialising Routes
const router = express.Router();

//GET all Invoices
router.get('/invoice', getInvoices)

//POST an Invoice
router.post('/invoice', createInvoice);

module.exports = router;