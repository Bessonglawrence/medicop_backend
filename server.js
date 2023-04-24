require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Custom methods imports
const TestRoutes = require('./routes/tests');
const InvoiceRoutes = require('./routes/tests');
const UserRoutes = require('./routes/user')


// App initialisation and middleware
const app = express();

app.use(express.json());

app.use(cors({
    origin: '*',
    credentials: true
}))

app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})

// Test Routes
app.use('/api', TestRoutes);

// Authentication Routes
app.use('/api/user', UserRoutes);

// Invoice Routes
//app.use('/api/invoice', InvoiceRoutes)


//Connect to Database and listening to PORT
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    //Listening to PORT after connection
    app.listen(process.env.PORT, () => console.log(`Process in running on Port ${process.env.PORT}`))
})
.catch((error) =>{
    console.log(error)
})

