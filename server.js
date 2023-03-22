require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// Custom methods imports
const testModel = require('./models/testModel')


// App initialisation and middleware
const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})

// Routes
app.get('/', async (req, res) => {
    try{
        let test = await testModel.find({})
        // .limit(50)
        // .sort({createdAt: -1})

        res.status(200).json(test);
    }
    catch (error) {
        res.status(500).json({error: error.body})
    }
})

app.post('/', async(req, res) => {
    const { category, name, price} = req.body;

    try{
        const test = await testModel.create({category,name,price})
        res.status(200).json(test);
    } catch(error){
        res.status(500).json({error: error.body})
    }

})


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

