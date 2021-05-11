const { Operation, Type } = require('../database');

const getAllOps = async (req, res) => {
  try {
    const operations = await Operation.findAll({ include: Type });
    res.status(200).json({ operations });
  } catch (err) {
    console.error(err);
  }
};

const addOp = async (req, res) => {
  try {
    const newOp = await Operation.create(req.body);
    res.status(201).json(newOp);
  } catch (err) {
    console.error(error);
  }
};

module.exports = {
  getAllOps,
  addOp,
};
