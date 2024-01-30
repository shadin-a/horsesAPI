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

  //ADD NEW LOCATION
   router.post('/add', async (req, res) => {
    try {
      // LOCATION DETAILS
      const { name, address } = req.body;
  
      // VALIDATE ENTRIES
      if (!name || !address ) {
        return res.status(400).json({ error: "Incomplete location details" });
      }
  
      // NEW HORSE OBJECT
      const newLocation = {
        name: name,
        address: address,
      };
  
      // INSERT NEW OWNER
      const result = await client.db("horseDatabase").collection('locations').insertOne(newLocation);
  
      console.log(result);
    } catch (error) {
      console.error("Error adding location:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });



module.exports = router

