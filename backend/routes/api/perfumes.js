const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const db = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");


// Don't forget to write validations



// GET home page
router.get('/', asyncHandler(async function(req,res) {
    const perfumes = await db.Perfume.findAll();
    return res.json(perfumes)
}));

// GET perfume detail page
router.get('/:id', asyncHandler(async (req,res) => {
    const perfume = await db.Perfume.findOne({
        where: {
            id: req.params.id
        }
    })
    return res.json(perfume)
    
}));







module.exports = router;
