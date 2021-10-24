const express = require("express");
const router = express.Router();
const mstusers = require("../modules/mstusers/routes");
const mstroleuser = require("../modules/mstrole/routes");
const elastic = require("../modules/elastic/routes");

router.use("/mstusers", mstusers);
router.use("/mstrole", mstroleuser);
router.use("/elastic", elastic)

module.exports = router;
