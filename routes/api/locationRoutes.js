const client = require("../../connection.js");
const router = require("express").Router();

router.get('/', async (req, res) => {

    const cursor = client.db("horseDatabase").collection("locations").find();
    const locationData = await cursor.toArray();
    console.log("um...hi?", locationData);
    res.json({ locationData })
});


module.exports = router

// router.get("/:id", async (req,res) => {
//     const cursor = await client.db("horseDatabase").collection('owners').findOne({_id: req.params.id})
//     //const oneOwner = await cursor.toArray();
//     console.log(cursor);
//     res.json(cursor);
//   });
