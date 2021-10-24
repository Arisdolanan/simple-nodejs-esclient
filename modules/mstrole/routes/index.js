const express = require("express");
const router = express.Router();
const MstRoleUsersController = require("../controllers");

router.get("/", MstRoleUsersController.getAllMstRoleUser);
router.get("/:id", MstRoleUsersController.getAllMstRoleUserId);
router.post("/", MstRoleUsersController.createMstRoleUser);
router.patch("/:id", MstRoleUsersController.updateMstRoleUser);
router.delete("/:id", MstRoleUsersController.deleteMstRoleUser);

module.exports = router;
