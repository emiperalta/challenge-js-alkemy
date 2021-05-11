const { Router } = require('express');

const operationController = require('../controller/operation.controller');

const router = Router();

router.get('/', operationController.getAllOps);

router.post('/', operationController.addOp);

module.exports = router;
