const express = require('express');

const {
    getInvoices,
    createInvoice,
    updateInvoice,
    getInvoice
} = require('../controllers/InvoiceControllers')

//Initialising Routes
const router = express.Router();

// GET all Invoices
router.get('/invoice', getInvoices)

// POST an Invoice
router.post('/invoice', createInvoice);

// UPDATE an Invoice
router.patch('/invoice/:id', updateInvoice)

// GET single Invoice
router.get('/invoice/:id', getInvoice)

module.exports = router;