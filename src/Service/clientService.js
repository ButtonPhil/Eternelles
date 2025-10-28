import API from "./API.js";


export const register = (data) => API.post('/createClient', data);
export const login = (data) => API.post('/login', data);

export const getProfile = () => API.get('/profile', {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});
export const updateInfoProfile = (data) => API.put('/updateInfoProfile', data, {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});
export const updatePassword = (data) => API.put('/updatePassword', data, {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});
export const updateMail = (data) => API.put('/updateMail', data, {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});
export const clientList = () => API.get('/client', {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});
export const getProfileClient = (id) => API.get(`/profile/${id}`, {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});
export const deleteClient = (idClient) => API.delete(`/deleteClient/${idClient}`, {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});






export default {register, login, getProfile, clientList, deleteClient};
