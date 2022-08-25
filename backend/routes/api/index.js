// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const userRouter = require('./users.js');
const perfumesRouter = require('./perfumes.js')
const commentRouter = require ('./comments.js')

router.use('/session', sessionRouter)
router.use('/users', userRouter);
router.use('/perfumes', perfumesRouter);
router.use('/comments', commentRouter);
// you already have the /perfumes route on line 9
//router.use('/perfumes/:id', perfumesRouter);








// Test Route (can delete)
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


module.exports = router;
