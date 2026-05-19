const router = require("express").Router();
const { createProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty, } = require('../controllers/propertyController.js')



router.post("/", createProperty);
router.get("/", getAllProperties);
router.get("/:id", getPropertyById);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

module.exports = router;
