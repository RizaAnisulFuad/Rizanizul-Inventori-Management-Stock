import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/products",
  headers: {
    "Content-Type": "application/json",
  },
});
const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get();
        return response.data;
    } catch (error) {
        console.error('Error fetching all products:', error);
        throw error; 
    }
};

const getProductById = async (id) => {
    try {
        const response = await axiosInstance.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error; 
    }
};

const createProduct = async (product) => {
    try {
        const response = await axiosInstance.post('/', product);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error; 
    }
};

const updateProduct = async (id, product) => {
    try {
        const response = await axiosInstance.put(`/${id}`, product);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error; 
    }
};

const deleteProduct = async (id) => {
    try {
        const response = await axiosInstance.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error; 
    }
};

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct }