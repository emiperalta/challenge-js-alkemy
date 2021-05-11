const { Operation } = require('../database');

const getAllOps = async (req, res) => {
  const operations = await Operation.findAll();
  res.status(200).json(operations);
};

module.exports = {
  getAllOps,
};
