import React, { useEffect, useState, } from "react"
import { getGallery } from "../Service/articleService.js";
import NavBar from "../Component/Navbar.jsx";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";



const GalleryPage = () => {

    const [image, setImage] = useState([]);
    
    const fetchGallery = async () => {

        try {

            const response = await getGallery();
            console.log(response);
            setImage(response)


        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {

        fetchGallery();

    }, []);

    return (
        <>
            <div className='NomSite'>

                <img src="src\assets\NomDuSite.png" alt="Nom du site" />

            </div>

            <div>

                <NavBar />

            </div>

            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>
                    {image.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block" }}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </>
    )

}

export default GalleryPage;