const express = require('express');

const {
    getTests,
    createTest
} = require('../controllers/testControllers')

const {
    getInvoices,
    createInvoice
} = require('../controllers/InvoiceControllers')

const router = express.Router();

// GET all Test
router.get('/test', getTests);

// POST Test
router.post('/test', createTest);

// GET all Invoices
router.get('/invoice', getInvoices);

//POST an Invoice
router.post('/invoice', createInvoice);

module.exports = router;