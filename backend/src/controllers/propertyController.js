const Property = require("../models/Property")
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

const createProperty = async (req, res) => {
    try {
        let uploadedImages = [];

        if (req.files && req.files.length > 0) {
            for (const file of req.files) {
                const result = await new Promise(
                    (resolve, reject) => {
                        const stream =
                            cloudinary.uploader.upload_stream(
                                {
                                    folder: "properties",
                                },
                                (error, result) => {
                                    if (error) reject(error);
                                    else resolve(result);
                                }
                            );

                        streamifier
                            .createReadStream(file.buffer)
                            .pipe(stream);
                    }
                );

                uploadedImages.push(result.secure_url);
            }
        }

        const property = await Property.create({
            ...req.body,

            images: uploadedImages,
        });

        res.status(201).json({
            success: true,
            property,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = {
    createProperty,
};

const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const getPropertyByStatus = async (req, res) => {
    try {
        const { status } = req.params;

        if (!["active", "inactive"].includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status",
            });
        }

        const properties = await Property.find({ status });

        res.status(200).json({
            success: true,
            count: properties.length,
            properties,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
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


module.exports = { createProperty, getAllProperties, getPropertyByStatus, updateProperty, deleteProperty }