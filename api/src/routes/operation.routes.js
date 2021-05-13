const { Router } = require('express');

const operationController = require('../controller/operation.controller');

const router = Router();

router.get('/', operationController.getAllOps);
router.get('/:id', operationController.getOp);
router.post('/', operationController.addOp);
router.put('/:id', operationController.updateOp);
router.delete('/:id', operationController.deleteOp);

module.exports = router;
