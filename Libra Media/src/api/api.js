import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("https://682105e9259dad2655ae474b.mockapi.io/vendo");
  return response.data;
};


export const fetchRegistration = async (userData) => {
  const response = await axios.post("https://66d06634181d059277de6dbc.mockapi.io/login", userData);
  return response.data;
};

export const fetchLogin = async () => {
  const response = await axios.get("https://66d06634181d059277de6dbc.mockapi.io/login");
  return response.data;
};
