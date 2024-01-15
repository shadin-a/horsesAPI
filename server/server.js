//REQUIRES

const express = require("express"); 
const { MongoClient, ServerApiVersion } = require('mongodb');
const routes = require('./routes/index.js');
const app = express(); 
const PORT = process.env.PORT || 3001; 

const uri = process.env.MONGODB_URI;

app.use(express.json());


app.use(routes)

// For testing purposes 
app.get("/", (req, res) => { 
    res.send("<h2>It's Working!</h2>"); 
}); 


async function findOneHorse(client, nameOfHorse) {
    const result = await client.db("horseDatabase").collection("horses").findOne({ name: nameOfHorse })
    if (result) {
        console.log(`Here is the horse you're looking for:`);
        console.log(result);
    } else {
        console.log(`No horses for you :(`);
    }
}

// app.get('/horses', async (req, res) => {
//     try {
//       const horsesData = await client.db("horseDatabase").collection("horses").findAll({
//       }).catch((err) => {
//         res.json(err);
//       });

//       res.status(200).render('horses', { horsesData })
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

//GET ALL HORSES
// app.get('/horses', (req, res) => {
//     var db = client.db('horseDatabase');
//     db.collection('horses').find().toArray( (err, results) => {
//       res.send(results)
//     });
// });

// //GET ALL OWNERS
// app.get('/owners', (req, res) => {
//     var db = client.db('horseDatabase');
//     db.collection('owners').find().toArray( (err, results) => {
//       res.send(results)
//     });
// });

// //GET ALL LOCATIONS
// app.get('/locations', (req, res) => {
//     var db = client.db('horseDatabase');
//     db.collection('locations').find().toArray( (err, results) => {
//       res.send(results)
//     });
// });

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});

