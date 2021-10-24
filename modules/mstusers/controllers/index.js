const models = require("../../models");
const { hashSync, genSaltSync, compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const model_role = require("../../models").mst_role;

const getAllMstUsers = async (req, res) => {
  try {
    const mstusers = await models.mst_users.findAll({
      attributes: [
        "id",
        "user_id",
        "username",
        "fullname",
        "role_id",
        "user_type",
        "email",
        "phone",
        "company",
        "position",
        "address",
        "signature_path",
        "last_login",
        "created_by",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: model_role,
          as: "mst_role",
        },
      ],
    });
    res.status(200).send({
      status: 200,
      message: `Successfully retrieved`,
      data: mstusers,
    });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

const getAllMstUsersId = async (req, res) => {
  try {
    const id = req.params.id;
    const mstusers = await models.mst_users.findAll({
      attributes: [
        "id",
        "user_id",
        "username",
        "fullname",
        "role_id",
        "user_type",
        "email",
        "phone",
        "company",
        "position",
        "address",
        "signature_path",
        "last_login",
        "created_by",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: model_role,
          as: "mst_role",
        },
      ],
      where: {
        id: id,
      },
    });
    res.status(200).send({
      status: 200,
      message: `Successfully retrieved`,
      data: mstusers,
    });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

const createMstUser = async (req, res) => {
  try {
    const {
      user_id,
      username,
      fullname,
      role_id,
      user_type,
      email,
      phone,
      company,
      position,
      address,
      signature_path,
      created_by,
      last_login,
    } = req.body;

    const body = req.body;
    const salt = genSaltSync(10);
    password = hashSync(body.password, salt);
    await models.mst_users.create({
      user_id,
      username,
      password,
      fullname,
      role_id,
      user_type,
      email,
      phone,
      company,
      position,
      address,
      signature_path,
      created_by,
      last_login,
    });
    res.status(200).send({
      status: 200,
      message: "Mst User added successfully",
    });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

const updateMstUser = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      user_id,
      username,
      password,
      fullname,
      role_id,
      user_type,
      email,
      phone,
      company,
      position,
      address,
      signature_path,
      created_by,
      last_login,
    } = req.body;
    await models.mst_users.update(
      {
        user_id,
        username,
        password,
        fullname,
        role_id,
        user_type,
        email,
        phone,
        company,
        position,
        address,
        signature_path,
        created_by,
        last_login,
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

const deleteMstUser = async (req, res) => {
  try {
    const id = req.params.id;
    await models.mst_users.destroy({
      where: {
        id: id,
      },
    });

    res
      .status(200)
      .send({ status: 200, message: "Mst User Deleted successfully" });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

module.exports = {
  getAllMstUsers,
  getAllMstUsersId,
  createMstUser,
  updateMstUser,
  deleteMstUser,
};
