import axiosInstance from "./axiosInstance";


export const getAllProperties = async () => {
  const res = await axiosInstance.get("/api/properties");

  return res.data;
};


export const getPropertiesByStatus = async (status) => {
  const res = await axiosInstance.get(
    `/api/properties/status/${status}`
  );

  return res.data;
};


export const createProperty = (data) =>
  axiosInstance.post("/api/properties", data);


export const updateProperty = (id, data) =>
  axiosInstance.put(`/api/properties/${id}`, data);


export const deleteProperty = (id) =>
  axiosInstance.delete(`/api/properties/${id}`);