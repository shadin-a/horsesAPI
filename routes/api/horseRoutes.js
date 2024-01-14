const client = require("../../connection.js");
const router = require("express").Router();
const { ObjectId } = require('mongodb');

//ROUTE TO GET ALL HORSES
router.get('/', async (req, res) => {
   
    const cursor = client.db("horseDatabase").collection("horses").find();
    const horsesData = await cursor.toArray();
    console.log("um...hi?", horsesData);
    res.json({horsesData})
   
  });

//ROUTE TO GET ONE HORSE BY ID
  router.get('/:id', async (req, res) => {
    try {
      const horseId = req.params.id;
      const objectId = new ObjectId(horseId);
  
      const cursor = await client.db("horseDatabase").collection('horses').findOne({ _id: objectId });
  
      if (cursor) {
        res.json(cursor);
      } else {
        res.status(404).json({ error: "Horse not found" });
      }
    } catch (error) {
      console.error("Error fetching horse data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  
  // router.get("/:id", async (req,res) => {
  //   const cursor = await client.db("horseDatabase").collection('horses').findOne({_id: req.params.id})
  //   //const oneHorse = await cursor.toArray();
  //   console.log(cursor);
  //   res.json(cursor);
  // });
// async function findOneHorse(client, nameOfHorse) {
//     const result = await client.db("horseDatabase").collection("horses").findOne({ name: nameOfHorse })
//     if (result) {
//         console.log(`Here is the horse you're looking for:`);
//         console.log(result);
//     } else {
//         console.log(`No horses for you :(`);
//     }
// }

// app.get('/horses', (req, res) => {
//     var db = client.db('horseDatabase');
//     db.collection('horses').find().toArray( (err, results) => {
//       res.send(results)
//     });
// });



module.exports = router