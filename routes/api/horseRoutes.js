const client = require("../../connection.js");
const router = require("express").Router();
const { ObjectId } = require('mongodb');

//ROUTE TO GET ALL HORSES
router.get('/', async (req, res) => {

  const cursor = client.db("horseDatabase").collection("horses").find();
  const horsesData = await cursor.toArray();
  console.log("um...hi?", horsesData);
  res.json({ horsesData })

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

//GET ROUTE FOR ALL HORSES WITH SAME OWNER
router.get('/owner/:owner', async (req, res) => {
  try {
    const owner = req.params.owner;
    const objectId = new ObjectId(owner);

    const cursor = await client.db("horseDatabase").collection('horses').find({ owner: objectId }).toArray();
    if (cursor.length > 0) {
      res.json(cursor);
    } else {
      res.status(404).json({ error: "No horses found for the specified owner" });
    }
  } catch (error) {
    console.error("Error fetching horse data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//GET ALL HORSES WITH SAME LOCATION 
router.get('/location/:location', async (req, res) => {
  try {
    const location = req.params.location;
    const objectId = new ObjectId(location);

    const cursor = await client.db("horseDatabase").collection('horses').find({ location: objectId }).toArray();
    if (cursor.length > 0) {
      res.json(cursor);
    } else {
      res.status(404).json({ error: "No horses found at this location" });
    }
  } catch (error) {
    console.error("Error fetching horse data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//ADD A HORSE TO THE DATABASE
router.post('/add', async (req, res) => {
  try {
    // HORSE DETAILS
    const { name, height, breed, age, location, owner, program,  year_of_birth } = req.body;

    // VALIDATE ENTRIES
    if (!name || !height || !breed || !age || !location || !owner || !program || !year_of_birth) {
      return res.status(400).json({ error: "Incomplete horse details" });
    }

    // NEW HORSE OBJECT
    const newHorse = {
      name: name,
      height: height,
      breed: breed,
      age: age,
      location: new ObjectId(location),
      ownerId: new ObjectId(owner),
      program: program,
      year_of_birth: year_of_birth

    };

    // INSERT NEW HORSE
    const result = await client.db("horseDatabase").collection('horses').insertOne(newHorse);

    console.log(result);
  } catch (error) {
    console.error("Error adding horse:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//REMOVE A HORSE FROM THE DATABASE 
router.delete('/:id', async (req, res) => {
  try {
    const horseId = req.params.id;
    const objectId = new ObjectId(horseId);

    // Check if the horse with the specified ID exists
    const existingHorse = await client.db("horseDatabase").collection('horses').findOne({ _id: objectId });

    if (!existingHorse) {
      return res.status(404).json({ error: "Horse not found" });
    }

    // Delete the horse from the database
    const result = await client.db("horseDatabase").collection('horses').deleteOne({ _id: objectId });

    // Return a success message
    res.json({ message: "Horse successfully deleted", deletedCount: result.deletedCount });
  } catch (error) {
    console.error("Error deleting horse:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router