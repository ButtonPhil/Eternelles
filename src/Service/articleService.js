import API from "./API.js";





export const getType = () => API.get('/typeCategorie', {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});

export const getGallery = () => API.get('/gallery');




export default (getType, getGallery) ;