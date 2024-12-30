import axios from "axios";

// Set the base URL for your API (backend URL)
const API_URL = "http://localhost:5000/api/categories";

export const getCategories = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return an empty array if there's an error
  }
};
