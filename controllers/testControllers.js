const testModel = require('../models/testModel');
const mongoose = require('mongoose');

// GET all Tests
const getTests = async (req, res) => {
    try{
        let test = await testModel.find({})
        // .limit(50)
        // .sort({createdAt: -1})

        res.status(200).json(test);
    }
    catch (error) {
        res.status(500).json({error: error.body})
    }
}

//POST a Test
const createTest = async(req, res) => {
    const { category, testName, testPrice} = req.body;

    try{
        const test = await testModel.create({category,testName,testPrice})
        res.status(200).json(test);
    } catch(error){
        res.status(500).json({error: error.body})
    }

}

module.exports = {
    getTests,
    createTest
}