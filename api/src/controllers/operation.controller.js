const { Operation, Type, User } = require('../database');

const getAllOps = async (req, res) => {
  try {
    const operations = await Operation.findAll({
      include: [
        { model: Type, attributes: ['type'] },
        { model: User, attributes: ['username', 'email'] },
      ],
    });
    res.status(200).json(operations);
  } catch (err) {
    console.error(err);
  }
};

const getOp = async (req, res) => {
  const { id } = req.params;
  try {
    const operation = await Operation.findOne({
      where: { id },
      include: [
        { model: Type, attributes: ['type'] },
        { model: User, attributes: ['username', 'email'] },
      ],
    });
    if (!operation) return res.status(404).json({ error: 'Operation not found' });
    res.status(200).json(operation);
  } catch (err) {
    console.error(err);
  }
};

const addOp = async (req, res) => {
  const { concept, amount } = req.body;
  const loggedUserId = req.user;
  try {
    if (!concept || !amount) {
      return res
        .status(400)
        .json({ error: 'Concept and/or amount must not be empty' });
    }
    const opToSave = {
      ...req.body,
      userId: loggedUserId,
    };
    const newOp = await Operation.create(opToSave);
    const op = await Operation.findOne({
      where: { id: newOp.id },
      include: [
        { model: Type, attributes: ['type'] },
        { model: User, attributes: ['username', 'email'] },
      ],
    });
    res.status(201).json(op);
  } catch (err) {
    console.error(err);
  }
};

const updateOp = async (req, res) => {
  const { id } = req.params;
  const { concept, amount } = req.body;
  const loggedUserId = req.user;
  try {
    if (!concept || !amount) {
      return res
        .status(400)
        .json({ error: 'Concept and/or amount must not be empty' });
    }
    const opToUpdate = await Operation.findOne({
      where: { id },
      include: [
        { model: Type, attributes: ['type'] },
        { model: User, attributes: ['username', 'email'] },
      ],
    });
    if (!opToUpdate) return res.status(404).json({ error: 'Operation not found ' });
    /*checks if the user who wants to update the operation 
      is the same user who created the operation*/
    if (opToUpdate.userId !== loggedUserId) {
      return res.status(403).json({ error: 'Not allowed' });
    }
    await opToUpdate.update(req.body);
    res.status(200).json(opToUpdate);
  } catch (err) {
    console.error(err);
  }
};

const deleteOp = async (req, res) => {
  const { id } = req.params;
  const loggedUserId = req.user;
  try {
    const opToDelete = await Operation.findOne({ where: { id } });
    if (!opToDelete) return res.status(404).json({ error: 'Operation not found' });
    /*checks if the user who wants to delete the operation 
      is the same user who created the operation*/
    if (opToDelete.userId !== loggedUserId) {
      return res.status(403).json({ error: 'Not allowed' });
    }
    await opToDelete.destroy();
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
