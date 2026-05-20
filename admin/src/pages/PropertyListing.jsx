import { useState } from "react";
import {
  TbPlus,
  TbPencil,
  TbTrash,
  TbX,
} from "react-icons/tb";

import { useProperties } from "../hooks/useProperties";

export default function PropertyListing() {
  const [filter, setFilter] = useState("");

  // Delete Modal
  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [selectedPropertyId, setSelectedPropertyId] =
    useState(null);

  // Form Modal
  const [showFormModal, setShowFormModal] =
    useState(false);

  const [isEditing, setIsEditing] =
    useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    pricePerWeek: "",
    description: "",
    features: "",
    status: "active",
    images: [],
  });


  console.log(formData);
  
  const {
    properties,
    isLoading,
    updateAProperty,
    deleteAProperty,
    createNewProperty,
  } = useProperties(filter);

  // ---------------- STATUS TOGGLE ----------------

  const handleStatusToggle = (property) => {
    const updatedStatus =
      property.status === "active"
        ? "inactive"
        : "active";

    updateAProperty({
      id: property._id,
      data: {
        status: updatedStatus,
      },
    });
  };

  // ---------------- DELETE ----------------

  const openDeleteModal = (id) => {
    setSelectedPropertyId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    deleteAProperty(selectedPropertyId);

    setShowDeleteModal(false);
    setSelectedPropertyId(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedPropertyId(null);
  };

  // ---------------- CREATE ----------------

  const openCreateModal = () => {
    setIsEditing(false);

    setFormData({
      title: "",
      location: "",
      pricePerWeek: "",
      description: "",
      features: [],
      status: "active",
      images: [],
    });

    setShowFormModal(true);
  };

  // ---------------- EDIT ----------------

  const openEditModal = (property) => {
    setIsEditing(true);

    setSelectedPropertyId(property._id);

    setFormData({
      title: property.title || "",
      location: property.location || "",
      pricePerWeek:
        property.pricePerWeek || "",

      description:
        property.description || "",

      features:
        property.features?.join(", ") || "",

      status: property.status || "active",

      images: [],
    });

    setShowFormModal(true);
  };

  // ---------------- INPUT CHANGE ----------------

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Images
    if (name === "images") {
      setFormData((prev) => ({
        ...prev,
        images: files,
      }));

      return;
    }

    // Other Fields
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ---------------- SUBMIT ----------------

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append("title", formData.title);

    form.append("location", formData.location);

    form.append(
      "pricePerWeek",
      formData.pricePerWeek
    );

    form.append(
      "description",
      formData.description
    );

    form.append("status", formData.status);

    form.append(
      "features",
      JSON.stringify(
        formData.features
          .split(",")
          .map((item) => item.trim())
      )
    );

    // Images
    for (
      let i = 0;
      i < formData.images.length;
      i++
    ) {
      form.append(
        "images",
        formData.images[i]
      );
    }

    // Create
    if (!isEditing) {
      createNewProperty(form);
    }

    // Update
    else {
      updateAProperty({
        id: selectedPropertyId,
        data: form,
      });
    }

    setShowFormModal(false);
  };

  // ---------------- COUNTS ----------------

  const activeCount = properties.filter(
    (p) => p.status === "active"
  ).length;

  const inactiveCount = properties.filter(
    (p) => p.status === "inactive"
  ).length;

  if (isLoading) {
    return (
      <div className="p-6 text-lg font-medium text-gray-600">
        Loading properties...
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-orange-700">
            {properties.length} properties total
          </h1>
        </div>

        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-md transition-all duration-300 cursor-pointer"
        >
          <TbPlus size={18} />
          Add Property
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setFilter("active")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === "active"
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Active

          <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
            {activeCount}
          </span>
        </button>

        <button
          onClick={() => setFilter("inactive")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === "inactive"
              ? "bg-gray-800 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Inactive

          <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
            {inactiveCount}
          </span>
        </button>

        <button
          onClick={() => setFilter("")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === ""
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-xs font-semibold uppercase tracking-wide text-gray-500">
          <p>Title</p>
          <p>Price/Week</p>
          <p>Features</p>
          <p>Status</p>
          <p>Actions</p>
        </div>

        {/* Body */}
        <div>
          {properties?.map((property) => (
            <div
              key={property._id}
              className="grid grid-cols-5 gap-4 px-6 py-5 border-b border-gray-100 items-center hover:bg-gray-50 transition-all duration-200"
            >
              {/* Title */}
              <div>
                <h2 className="font-semibold text-gray-800">
                  {property.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {property.description}
                </p>
              </div>

              {/* Price */}
              <p className="font-semibold text-gray-800">
                ₹{property.pricePerWeek}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {property.features?.map(
                  (feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs"
                    >
                      {feature}
                    </span>
                  )
                )}
              </div>

              {/* Status */}
              <div>
                <button
                  onClick={() =>
                    handleStatusToggle(property)
                  }
                  className={`relative w-12 h-6 rounded-full transition-all duration-300 cursor-pointer ${
                    property.status === "active"
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                      property.status === "active"
                        ? "translate-x-6"
                        : ""
                    }`}
                  />
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                {/* Edit */}
                <button
                  onClick={() =>
                    openEditModal(property)
                  }
                  className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 text-sm flex items-center gap-1 transition-all duration-300 cursor-pointer"
                >
                  <TbPencil size={16} />
                  Edit
                </button>

                {/* Delete */}
                <button
                  onClick={() =>
                    openDeleteModal(property._id)
                  }
                  className="px-3 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 text-sm flex items-center gap-1 transition-all duration-300 cursor-pointer"
                >
                  <TbTrash size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- FORM MODAL ---------------- */}

      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                {isEditing
                  ? "Edit Property"
                  : "Create Property"}
              </h2>

              <button
                onClick={() =>
                  setShowFormModal(false)
                }
                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <TbX size={22} />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 grid grid-cols-2 gap-5"
            >
              {/* Title */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Property title"
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Location"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Price / Week
                </label>

                <input
                  type="number"
                  name="pricePerWeek"
                  value={formData.pricePerWeek}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="2500"
                  required
                />
              </div>

              {/* Status */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="active">
                    Active
                  </option>

                  <option value="inactive">
                    Inactive
                  </option>
                </select>
              </div>

              {/* Features */}
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Features
                </label>

                <input
                  type="text"
                  name="features"
                  value={formData.features}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Wifi, Pool, AC"
                />
              </div>

              {/* Description */}
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Description
                </label>

                <textarea
                  rows={4}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  placeholder="Property description"
                />
              </div>

              {/* Images Upload */}
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Property Images
                </label>

                <input
                  type="file"
                  name="images"
                  multiple
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />

                {/* Preview */}
                {formData.images?.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {Array.from(
                      formData.images
                    ).map((image, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(
                          image
                        )}
                        alt="preview"
                        className="w-24 h-24 rounded-xl object-cover border border-gray-200"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="col-span-2 flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() =>
                    setShowFormModal(false)
                  }
                  className="px-5 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 cursor-pointer"
                >
                  {isEditing
                    ? "Update Property"
                    : "Create Property"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------- DELETE MODAL ---------------- */}

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Delete Property
            </h2>

            <p className="text-gray-500 mb-6">
              Are you sure you want to delete
              this property?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-all duration-300 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}