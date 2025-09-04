import API from "./API.js";





export const getType = () => API.get('/typeCategorie', {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

});

export const getCarousel = () => API.getCarousel('/carouselImg', {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }
})




export default getType ;