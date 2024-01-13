const client = require("../../connection.js");
const router = require("express").Router();

router.get('/', async (req, res) => {
   
    const cursor = client.db("horseDatabase").collection("horses").find();
    const horsesData = await cursor.toArray();
    console.log("um...hi?", horsesData);
    res.json({horsesData})
    // try {
    //   const client = req.dbClient; // Access the MongoDB client from the request object
    //   const horsesData = await client.collection("horses").findAll({
    //     // Your query or other logic here
    //   }).catch((err) => {
    //     res.json(err);
    //   });
  
    //   res.status(200).render('horses', { horsesData });
    // } catch (err) {
    //   res.status(500).json(err);
    // }
  });

  router.get("/:id", async (req,res) => {
    const cursor = await client.db("horseDatabase").collection('horses').findOne({_id: req.params.id})
    //const oneHorse = await cursor.toArray();
    console.log(cursor);
    res.json(cursor);
  });
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