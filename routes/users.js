var express = require('express');
var router = express.Router();
const auth = require('../controller/auth')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', auth.register);

router.post('/setPassword', auth.setPassword);

module.exports = router;
