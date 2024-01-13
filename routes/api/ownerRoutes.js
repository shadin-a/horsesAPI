const router = require("express").Router();
const client = require("../../connection.js");

router.get('/', async (req, res) => {
   
    const cursor = client.db("horseDatabase").collection("owners").find();
    const ownerData = await cursor.toArray();
    console.log("um...hi?", ownerData );
    res.json({ownerData})
  });




module.exports = router