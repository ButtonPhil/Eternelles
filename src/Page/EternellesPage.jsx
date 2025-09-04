import { Button } from 'react-bootstrap';
import NavBar from '../Component/Navbar.jsx'
import Carousel from '../Component/CarouselComponent.jsx'



const EternellesPage = () => {


    return (

        <>
            <div className='NomSite'>
                <img src="src\assets\NomDuSite.png" alt="Nom du site" />
            </div>

            <div>

                <NavBar />

            </div>
            {/* <div>

                {Admin && (

                    <Button variant="primary" onClick={() => handleAjoutCarousel()}>

                        Ajout Carousel

                    </Button>
                )}

                <div>

                    <Carousel />

                </div>

            </div> */}

        </>

    )
    
}




export default EternellesPage;