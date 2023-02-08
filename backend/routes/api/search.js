const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const db = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");


router.post('/', asyncHandler(async (req, res) => {
      
    const { perfumeToBeSearched } = req.body;

    console.log('THIS IS THE PERFUME TO BE SEARCHED BACKEND', perfumeToBeSearched)


const perfumes = await db.Perfume.findAll({
    where: {
        name: perfumeToBeSearched
    }
})

//     const perfumes = await db.Perfume.findAll({
//         where: {
//             name: {
//                 [Op.iLike]: `%${ perfumeToBeSearched }%`
//             }
//         }
//     })

  return res.json(perfumes);

})
);


module.exports = router;
