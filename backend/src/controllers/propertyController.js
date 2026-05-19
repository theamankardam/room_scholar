const Property = require("../models/Property")


 const createProperty = async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(201).json(property);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

 const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


 const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) return res.status(404).json({ message: "Not found" });

        res.json(property);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


 const updateProperty = async (req, res) => {
    try {
        const updated = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) return res.status(404).json({ message: "Not found" });

        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

 // for deleting
const deleteProperty = async (req, res) => {
    try {
        const deleted = await Property.findByIdAndDelete(req.params.id);

        if (!deleted) return res.status(404).json({ message: "Not found" });

        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = { createProperty, getAllProperties, getPropertyById, updateProperty, deleteProperty }