import axios from "axios";
import { User } from "../components/Form";
import { API_BASE_URL } from "../constants";
   
const api = {
  addUser: async (data: User) => {
    console.log({ data });
    const response = await axios.post(`${API_BASE_URL}`, { ...data });
    return response;
  },
  getUser: async (name: string) => {
    const response = await axios.get(`${API_BASE_URL}?name=${name}`);
    return response;
  },
  updateUser: async (data: User) => {
    const response = await axios.patch(`${API_BASE_URL}`, { ...data });
    return response;
  },
  deleteUser: async (name: string) => {
    const response = await axios.delete(`${API_BASE_URL}?name=${name}`);
    return response;
  },
  getCount: async () => {
    const response = await axios.get(`${API_BASE_URL}/count`);
    return response;
  },
  reset: async () => {
    const response = await axios.get(`${API_BASE_URL}/reset`);
    return response;
  },
};

export default api;
