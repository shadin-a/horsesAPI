const router = require("express").Router();
const client = require("../../connection.js");
const { ObjectId } = require('mongodb');

//GET ALL OWNERS
router.get('/', async (req, res) => {
   
    const cursor = client.db("horseDatabase").collection("owners").find();
    const ownerData = await cursor.toArray();
    console.log("um...hi?", ownerData );
    res.json({ownerData})
  });

  //ROUTE TO GET ONE OWNER BY ID
  router.get('/:id', async (req, res) => {
    try {
      const ownerId = req.params.id;
      const objectId = new ObjectId(ownerId);
  
      const cursor = await client.db("horseDatabase").collection('owners').findOne({ _id: objectId });
  
      if (cursor) {
        res.json(cursor);
      } else {
        res.status(404).json({ error: "Owner not found" });
      }
    } catch (error) {
      console.error("Error fetching owner data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  //ADD AN OWNER
  router.post('/add', async (req, res) => {
    try {
      // OWNER DETAILS
      const { name } = req.body;
  
      // VALIDATE ENTRIES
      if (!name) {
        return res.status(400).json({ error: "Incomplete horse details" });
      }
  
      // NEW HORSE OBJECT
      const newOwner = {
        name: name,
      };
  
      // INSERT NEW OWNER
      const result = await client.db("horseDatabase").collection('owners').insertOne(newOwner);
  
      console.log(result);
    } catch (error) {
      console.error("Error adding owner:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


module.exports = router