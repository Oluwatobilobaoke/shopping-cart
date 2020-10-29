const router = require("express").Router();

const { home } = require('./controller')

router.get('/', home);

module.exports.indexRouter = router;