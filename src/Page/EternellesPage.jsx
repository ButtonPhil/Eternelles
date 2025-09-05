import { Button } from 'react-bootstrap';
import NavBar from '../Component/Navbar.jsx'
import Carousel from '../Component/CarouselComponent.jsx'
import Footer from '../Component/Footer.jsx';
import { useEffect, useState } from 'react';



const EternellesPage = () => {

    // const [admin, setAdmin] = useState(false);

    //     useEffect(() => {

    //         if (token) {

    //             const decodedToken = jwtDecode(token);
    //             console.log(decodedToken);

    //             if (decodedToken.Role === 1) {

    //                 setAdmin(true);

    //             }

    //             console.log("Admin status:", admin);

    //         }

    //     }, []);


    return (

        <>
            <div className='NomSite'>
                <img src="src\assets\NomDuSite.png" alt="Nom du site" />
            </div>

            <div>

                <NavBar />

            </div>
            {/* <div>

                {admin && (

                    <Button variant="primary" onClick={() => handleAjoutCarousel()}>

                        Ajout Carousel

                    </Button>
                )}

                <div>

                    <Carousel />

                </div>

            </div> */}

            <div className='Presentation'>
                <img className='Experience' src="src\assets\ExperienceArtiste.png" alt="Experience de l'artsite" />
                <img className='Experience' src="src\assets\NomArtiste.png" alt="Nom de l'artiste" />
            </div>

            <div className='Footer'>

                <Footer />

            </div>

        </>

    )

}




export default EternellesPage;