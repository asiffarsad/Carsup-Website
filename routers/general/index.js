const express = require("express");
const router = express.Router();

router.use(require("./general"));
router.use(require("./api"));

module.exports = router;
