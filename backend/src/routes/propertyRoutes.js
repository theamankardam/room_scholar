const router = require("express").Router();
const { createProperty,
    getAllProperties,
    getPropertyByStatus,
    updateProperty,
    deleteProperty, } = require('../controllers/propertyController.js')


router.post(
  "/",
  upload.array("images", 5),
  createProperty
);

router.get("/", getAllProperties);
router.get("/status/:status", getPropertyByStatus);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

module.exports = router;
