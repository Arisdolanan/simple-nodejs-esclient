const express = require("express");
const router = express.Router();
const MstUsersController = require("../controllers");

router.get("/", MstUsersController.getAllMstUsers);
router.get("/:id", MstUsersController.getAllMstUsersId);
router.post("/", MstUsersController.createMstUser);
router.patch("/:id", MstUsersController.updateMstUser);
router.delete("/:id", MstUsersController.deleteMstUser);

module.exports = router;
