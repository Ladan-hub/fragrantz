const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const db = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");


router.post('/search', asyncHandler(async(req,res)=> {
    const {searchInput} = req.body;

    const perfumes = await db.Perfume.findAll({
        where: {
            name: {
                [Op.iLike]: `%${searchInput}%`
            }
        }
    })
    
    return res.json(perfumes)

}))
