const router = require("express").Router();

const horseRoutes = require("./horseRoutes");
const ownerRoutes = require("./ownerRoutes");
const locationRoutes = require("./locationRoutes");


router.use("/horses", horseRoutes);
router.use("/owners", ownerRoutes);
router.use("/locations", locationRoutes);







module.exports = router