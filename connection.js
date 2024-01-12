const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
 if (err) throw err;
 console.log("Connected successfully to server");
});

module.exports = client;