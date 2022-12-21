const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const db = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");

// Backend Validations 

const commentValidations = [
    check('comment')
    .exists({checkFalsy: true})
    .withMessage('Please provide a comment'),
    handleValidationErrors
]




// POST uploading a comment (CREATE)
router.post('/:id', commentValidations, requireAuth, asyncHandler(async (req,res) => {
    
    const comment = await db.Comment.create(req.body)
    return res.json(comment)
}))

// GET all comments for one perfume (READ)
router.get('/:id', requireAuth, asyncHandler(async (req,res) => {
    const comments = await db.Comment.findAll({
        where:{
            perfumeId: req.params.id
        }
    })
    return res.json(comments)
}));

// DELETE one comment (DELETE)
router.delete('/delete', requireAuth, asyncHandler(async (req,res) => {
    const deletedComment = await db.Comment.findOne({
        where:{
            id: req.body.id
        }
    })
    await deletedComment.destroy();
    return res.json(deletedComment);
}))


module.exports = router; 
