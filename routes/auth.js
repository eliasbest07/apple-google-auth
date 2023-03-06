const { Router } = require('express');
const {googleController}= require('../controllers/auth');
const router = Router();

router.post('/google', googleController)

module.exports = router;