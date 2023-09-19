var express = require('express');
var router = express.Router();
const trips = require('../models/trip')

//Route GET qui recupère TOUS les trajets
router.get('/trips', function(req, res) {
  trips.find().then(data => 
    res.json(data))
});


//Trouve la ville via la clé DEPARTURE
router.get('/trips/departure/:id', function(req,res){
  trips.find({departure: req.params.id}).then(data =>{
    console.log(data)
    if(data) {
    res.json({ result: true, departure: data });
    } else {
    res.json({ result: false, error: "City not found" });
    }
  })
})


//Trouve la ville via la clé ARRIVAL
router.get('/trips/arrivals/:id', function(req,res){
  trips.find({arrival: req.params.id}).then(data =>{
    if(data) {
    res.json({ result: true, arrival: data });
    } else {
    res.json({ result: false, error: "City not found" });
    }
  })
})


router.get('/trips/findsearch', function(req,res){
  trips.find({departure: req.body, arrival: req.body}).then(data =>{
    if(data) {
    res.json({ result: true, departure: data, arrival: data });
    } else {
    res.json({ result: false, error: "City not found" });
    }
  })
})

module.exports = router;
