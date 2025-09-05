import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../Service/AuthenService.js';
import ModalLogin from './ModalLogin.jsx';
import ModalInscription from './ModalInscription.jsx';

const NavBar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(checkToken());
    const [openModalInscription, setOpenModalInscription] = useState(false);
    const [openModalLogin, setOpenModalLogin] = useState(false);

    const handleInscription = () => {

        setOpenModalInscription(true);

    };

    const handleCloseModalInscription = () => {

        setOpenModalInscription(false);

    };

    const handleLogin = () => {

        setOpenModalLogin(true);

    };

    const handleCloseModalLogin = () => {

        setOpenModalLogin(false);

    };

    useEffect(() => {
        setIsLoggedIn(checkToken());
    }, [window.location.pathname]);

    return <>


        <Navbar expand="lg" className="bg-transparent" style={{ maxWidth: "1200px", margin: "0 auto", borderBottom: "1px solid #3F3F3F" }}>
            <Container fluid>
                <div className="d-flex justify-content-between align-items-center w-100">
                    {/* Logo et lien Accueil */}
                    <div className="d-flex align-items-center">
                        <img className="logo me-3" src="src/assets/logo.png" alt="Logo" style={{ height: "40px" }} />
                        <Nav.Link onClick={() => { navigate('/Eternelles') }}>Accueil</Nav.Link>
                    </div>

                    {/* Lien Galerie */}
                    <div>
                        <Nav.Link onClick={() => { navigate('/Galerie') }}>Galerie</Nav.Link>
                    </div>

                    {/* Boutons de connexion/déconnexion */}
                    <div>
                        <Nav>
                            {isLoggedIn ? (
                                <>
                                    <Button variant="outline-primary" onClick={() => navigate('/profile')} className="me-2"
                                        style={{
                                            borderColor: "#D8C48C ",
                                            color: "#D8C48C ",
                                            backgroundColor: "transparent"
                                        }}
                                        >
                                        Profile
                                    </Button>
                                    <Button variant="outline-danger" onClick={() => {
                                        localStorage.removeItem("token");
                                        setIsLoggedIn(false);
                                    }}
                                        style={{
                                            borderColor: "#3F3F3F",
                                            color: "#3F3F3F",
                                            backgroundColor: "transparent"
                                        }}
                                    >
                                        Déconnexion
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Nav.Link onClick={handleInscription} className="me-3">Inscription</Nav.Link>
                                    <Nav.Link onClick={handleLogin}>Login</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </div>
                </div>
            </Container>
            <ModalInscription show={openModalInscription} onHide={handleCloseModalInscription} />
            <ModalLogin show={openModalLogin} onHide={handleCloseModalLogin} />
        </Navbar>

    </>;
}

export default NavBar;