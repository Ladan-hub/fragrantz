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

// POST uploading a perfume (CREATE)
router.post("/", requireAuth, asyncHandler(async (req,res) => {
    const perfume = await db.Perfume.create(req.body)
    return res.json(perfume)
}));

// PUT updating a perfume (UPDATE)
router.put("/:id", requireAuth, asyncHandler(async (req,res) => {
    const oldPerfume = await db.Perfume.findOne({
        where: {
            id: req.body.id
        }
    })

    const newPerfume = oldPerfume.update(req.body);
    return res.json(newPerfume)
}))




// DELETE deleting a perfume (DELETE)
router.delete("/delete", requireAuth, asyncHandler(async (req,res) => {
    const deletedPerfume = await db.Perfume.findOne({
        where: {
            id: req.body.id
        }
    })
    await deletedPerfume.destroy()
    return res.json(deletedPerfume)
}))


















// router.delete("/delete", requireAuth, asyncHandler(async(req,res) => {
//     const perfume = await db.Perfume.findByPk(req.body.id)
//     await perfume.destroy();
//     return res.json(req.body.id)
// }))

// router.get('/delete', asyncHandler(async (req,res) => {
//     const perfume = await db.Perfume.findOne({
//         where: {
//             id: req.params.id
//         }
//     })
//     return res.json(perfume)
    
// }));







module.exports = router;
