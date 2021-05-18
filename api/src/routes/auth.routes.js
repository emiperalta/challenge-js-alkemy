const { Router } = require('express');

const userController = require('../controllers/auth.controller');

const router = Router();

router.get('/', userController.getAllUsers);
router.post('/signin', userController.signIn);
router.post('/signup', userController.signUp);

module.exports = router;
