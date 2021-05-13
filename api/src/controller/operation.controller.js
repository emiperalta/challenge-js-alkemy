const { Operation, Type } = require('../database');

const getAllOps = async (req, res) => {
  try {
    const operations = await Operation.findAll({ include: Type });
    res.status(200).json({ operations });
  } catch (err) {
    console.error(err);
  }
};

const getOp = async (req, res) => {
  const { id } = req.params;
  try {
    const operation = await Operation.findOne({ where: { id }, include: Type });
    res.status(200).json(operation);
  } catch (err) {
    console.error(err);
  }
};

const addOp = async (req, res) => {
  try {
    const newOp = await Operation.create(req.body);
    res.status(201).json(newOp);
  } catch (err) {
    console.error(err);
  }
};

const updateOp = async (req, res) => {
  const { id } = req.params;
  try {
    const opToUpdate = await Operation.update(req.body, { where: { id } });
    if (!opToUpdate[0]) {
      return res.status(400).json({ error: 'Operation not found' });
    }
    res.status(204).end();
  } catch (err) {
    console.error(err);
  }
};

const deleteOp = async (req, res) => {
  const { id } = req.params;
  try {
    const opToDelete = await Operation.destroy({ where: { id } });
    if (opToDelete === 0) {
      return res.status(400).json({ error: 'Operation not found' });
    }
    res.status(204).end();
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addOp,
  deleteOp,
  getAllOps,
  getOp,
  updateOp,
};
