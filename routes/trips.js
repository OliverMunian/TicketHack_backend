var express = require('express');
var router = express.Router();
const trips = require('../models/trip')
const moment = require('moment')

//Route GET qui recupère TOUS les trajets
router.get('/', function(req, res) {
  trips.find().then(data => 
    res.json(data))
});


// //Trouve la ville via la clé DEPARTURE
// router.get('/trips/departure/:id', function(req,res){
//   trips.find({departure: req.params.id}).then(data =>{
//     console.log(data)
//     if(data) {
//     res.json({ result: true, departure: data });
//     } else {
//     res.json({ result: false, error: "City not found" });
//     }
//   })
// })


// //Trouve la ville via la clé ARRIVAL
// router.get('/trips/arrivals/:id', function(req,res){
//   trips.find({arrival: req.params.id}).then(data =>{
//     if(data) {
//     res.json({ result: true, arrival: data });
//     } else {
//     res.json({ result: false, error: "City not found" });
//     }
//   })
// })


router.get('/:departure/:arrival/:date', function(req,res){

  const {departure, arrival, date} = req.params;

  console.log({departure, arrival, date});

  trips.find({departure: req.params.departure, arrival: req.params.arrival, date: new moment().valueOf() }).then(data =>{
    if(data) {
    res.json({ result: true, departure: data.departure, arrival: data.departure, date: data.date });
    } else {
    res.json({ result: false, error: "City not found" });
    }
  })
})

// router.get("trips/:departure/:arrival/:date", (req, res) => {
//   let departure = req.params.departure;
//   let arrival = req.params.arrival;
//   let date = req.params.date;

// // let date = "2023-09-19T12:45:14.647Z"
// date = new Date(Number(date));
// date = moment(date);

// // Extraire l'année, le mois et le jour de la date de la requête
// const year = date.year();
// const month = date.month() + 1; // Mois commence à 0, donc ajoutez 1
// const day = date.date();

// // console.log(departure, arrival, date)
// // Trip.find({departure, arrival, date= {$gte: new Date("2023-09-19"), $lte: new Date("2023-09-19")}})
// trips.findOne({
//   departure,
//   arrival,
//   // date: { $gte: new Date("2023-09-19"), $lte: new Date("2023-09-20") },
//   date: {
//       $gte: moment([year, month - 1, day]).startOf('day').toDate(), // Début de la journée
//       $lte: moment([year, month - 1, day]).endOf('day').toDate()     // Fin de la journée
//   },
// }).then((data) => res.json(data));
// });

module.exports = router;
