// general.js

const express = require("express");
const router = express.Router();

const generalGetControllers = require("../../controllers/generalGetControllers");

// Define routes and middleware for the /general path
router.get("/", generalGetControllers.showHomePage);

// Add more routes or middleware as needed

module.exports = router;
