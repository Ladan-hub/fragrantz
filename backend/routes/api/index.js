// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const userRouter = require('./users.js');

router.use('/session', sessionRouter)

router.use('/users', userRouter);


router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


module.exports = router;
