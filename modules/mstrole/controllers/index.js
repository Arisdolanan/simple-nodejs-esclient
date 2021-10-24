const models = require("../../models");

const getAllMstRoleUser = async (req, res) => {
  try {
    const mstrole = await models.mst_role.findAll({});
    res.status(200).send({
      status: 200,
      message: `Successfully retrieved`,
      data: mstrole,
    });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

const getAllMstRoleUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const mstrole = await models.mst_role.findAll({
      attributes: ["id", "rolename", "created_by", "createdAt", "updatedAt"],
      where: {
        id: id,
      },
    });
    res.status(200).send({
      status: 200,
      message: `Successfully retrieved`,
      data: mstrole,
    });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

const createMstRoleUser = async (req, res) => {
  try {
    const { rolename, created_by } = req.body;
    await models.mst_role.create({
      rolename,
      created_by,
    });
    res.status(200).send({
      status: 200,
      message: "Mst User added successfully",
    });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

const updateMstRoleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { rolename, created_by } = req.body;
    await models.mst_role.update(
      {
        rolename,
        created_by,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).send({
      status: 200,
      message: "Mst User Updated successfully.",
    });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

const deleteMstRoleUser = async (req, res) => {
  try {
    const id = req.params.id;
    await models.mst_role.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send({ status: 200, message: "User berhasil di hapus." });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

module.exports = {
  getAllMstRoleUser,
  getAllMstRoleUserId,
  createMstRoleUser,
  updateMstRoleUser,
  deleteMstRoleUser,
};
