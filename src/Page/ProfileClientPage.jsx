import { useEffect, useState } from "react";
import { getProfileClient } from "../Service/clientService.js";
import Figure from 'react-bootstrap/Figure';
import { ListGroup } from "react-bootstrap";
import NavBar from "../Component/Navbar.jsx";
import { useParams } from "react-router-dom";



const ProfileClientPage = () => {

    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [adresse, setAdresse] = useState();
    const [pays, setPays] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [image, setImage] = useState();
    const param = useParams();

    
    const id = param.idClient;
    console.log(id);
    

    const fetchProfileClient = async (id) => {
            
        try {

            const profil = await getProfileClient(id)

            console.log(id);
        
            setNom(profil.data.nom)
            setPrenom(profil.data.prenom)
            setAdresse(profil.data.adresse)
            setPays(profil.data.pays)
            setEmail(profil.data.email)
            setPassword(profil.data.password)
            setImage(profil.data.imageClient)

        } catch (error) {

            console.error(error);

        }

    }

    useEffect(() => {

        fetchProfileClient(id);
        // console.log("idClient: "+ param.idClient)


    }, []);

    return (
    
        <>

            <div className='NomSite'>

                <img src="src\assets\NomDuSite.png" alt="Nom du site" />

            </div>

            <div>

                <NavBar />

            </div>

            <div>

                <h1>Votre Profil</h1>

            </div>

            <div>

                <Figure>

                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={image}
                    />

                </Figure>

            </div>

            <div>

                <ListGroup className="list-group-flush">

                    <ListGroup.Item>{nom}</ListGroup.Item>
                    <ListGroup.Item>{prenom}</ListGroup.Item>
                    <ListGroup.Item>{adresse}</ListGroup.Item>
                    <ListGroup.Item>{pays}</ListGroup.Item>
                    <ListGroup.Item>{email}</ListGroup.Item>

                </ListGroup>

            </div>
        </>

    )

}

export default ProfileClientPage;
