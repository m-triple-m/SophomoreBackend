const express = require('express');
const router = express.Router();
const Model = require('../models/courseModel');

router.post('/add', (req, res) => {
    let data = req.body;

    new Model(data).save()
        .then(() => {
            console.log('Data Saved');
            res.status(200).json({ message: 'success' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getall', (req, res) => {

    Model.find({})
        .then((data) => {
            console.log('courses data fetched');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.id)
        .then((data) => {
            console.log('courses fetched by id');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
        .then((data) => {
            console.log('courses deleted by id');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

module.exports = router;