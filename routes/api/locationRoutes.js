const client = require("../../connection.js");
const router = require("express").Router();
const { ObjectId } = require('mongodb');

//GET ALL LOCATIONS
router.get('/', async (req, res) => {

    const cursor = client.db("horseDatabase").collection("locations").find();
    const locationData = await cursor.toArray();
    console.log("um...hi?", locationData);
    res.json({ locationData })
});

//GET LOCATION BY ID
router.get('/:id', async (req, res) => {
    try {
      const locationId = req.params.id;
      const objectId = new ObjectId(locationId);
  
      const cursor = await client.db("horseDatabase").collection('locations').findOne({ _id: objectId });
  
      if (cursor) {
        res.json(cursor);
      } else {
        res.status(404).json({ error: "Location not found" });
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });



module.exports = router

