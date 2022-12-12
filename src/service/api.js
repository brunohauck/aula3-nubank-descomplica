import axios from 'axios';

const url = "http://localhost:4000/users"

export const getAllUsers = async () => {
    return await axios.get(`${url}`)
}
export const addUser = async (user) => {
    return await axios.post(url,user);
}
