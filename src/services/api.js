import axios from "axios";

const api= "https://localhost :3000/api";

export const getUsers = () => axios.get(api);
export const createUser = (data) => axios.post(api, data);
export const updateUser = (id, data) => axios.put(`${apiL}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${api}/${id}`);
