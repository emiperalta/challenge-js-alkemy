const { Router } = require('express');

const operationController = require('../controller/operation.controller');

const router = Router();

router.get('/', operationController.getAllOps);

module.exports = router;
