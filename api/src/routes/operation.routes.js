const { Router } = require('express');

const checkAuth = require('../utils/checkAuth');
const operationController = require('../controllers/operation.controller');

const router = Router();

router.get('/', operationController.getAllOps);
router.get('/:id', operationController.getOp);
router.post('/', checkAuth, operationController.addOp);
router.put('/:id', checkAuth, operationController.updateOp);
router.delete('/:id', checkAuth, operationController.deleteOp);

module.exports = router;
