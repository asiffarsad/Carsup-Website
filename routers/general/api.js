// api.js

const express = require("express");
const router = express.Router();

const apiGetControllers = require("../../controllers/apiGetControllers");


// Define routes and middleware for the /general path
router.get("/api/vehicles", apiGetControllers.getAllVehicles);

// Add more routes or middleware as needed

module.exports = router;
