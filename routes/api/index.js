const router = require("express").Router();
const horseRoutes = require("./horseRoutes");

router.use("/horses", horseRoutes);






module.exports = router