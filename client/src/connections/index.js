import { apiUrl } from "../constants";
import axios from 'axios';

export default {
    getUsers: () => {
        return axios.get(apiUrl);
    },

    createUser: (data) => {
        return axios.post(apiUrl, data);
    },

    updateUser: (id, data) => {
        return axios.put(`${apiUrl}/${id}`, data);
    },

    deleteUser: (id) => {
        return axios.delete(`${apiUrl}/${id}`);
    },

    searchUser: async (user) => {
        try{
            if(user && user.trim()){
                const allUsers = await axios.get(apiUrl);
                const filterBySearch = allUsers.data.filter(el => {
                    return el.name.toLowerCase().includes(user.toLowerCase()) || el.lastname.toLowerCase().includes(user.toLowerCase());
                });
                return filterBySearch;
            };
        } catch(err){
            console.error(err);
        };
    },

    filterStatus: (status) => {
        axios.get(`${apiUrl}/?status=${status}`);
    },

};