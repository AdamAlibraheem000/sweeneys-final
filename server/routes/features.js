const express = require('express');
const router = express.Router();
const Features = require('../models/features');

// GET all features
router.get('/', (req, res) => {
    Features.find()
    .then(feature => res.json(feature))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

// Add new feature
router.post('/add', (req, res) => {
    const newFeature = new Features({
        title: req.body.title,
        desc: req.body.desc,
        price: req.body.price
    })

    newFeature.save()
    .then(() => res.json("Feature posted successfully"))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

// Find feature by ID
router.get('/:id',(req, res) => {
    Features.findById(req.params.id)
    .then(feature => res.json(feature))
    .catch(err => res.status(400).json(`Error: ${err}`));

})

// Update feature
router.put('/update/:id', (req, res) => {
    Features.findById(req.params.id)
    .then(feature => {
        feature.title = req.body.title,
        feature.desc = req.body.desc,
        feature.price = req.body.price;

        feature.save().then(()=> res.json("Feature Updated Successfully"))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})



// Delete feature
router.delete('/:id', (req, res) => {
    Features.findByIdAndDelete(req.params.id)
    .then(() => res.json("The feature is deleted"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})


module.exports = router;