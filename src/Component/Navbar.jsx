import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <div className='d-flex'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => { navigate('/Eternelles') }}>Acceuil</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className='d-flex'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => { navigate('/Galerie') }}>Galerie</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>

                <div>
                    <Nav>
                        {isLoggedIn ? (
                            <>
                                <Button variant="outline-primary" onClick={() => navigate('/profile')}>
                                    Profile
                                </Button>
                                <Button className='ms-3' variant="outline-danger" onClick={() => {
                                    localStorage.removeItem("token");
                                    setIsLoggedIn(false);
                                }}>
                                    Déconnexion
                                </Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link onClick={handleInscription}>Inscription</Nav.Link>
                                <Nav.Link onClick={handleLogin}>Login</Nav.Link>
                            </>
                        )}
                    </Nav>
                    <ModalInscription show={openModalInscription} onHide={handleCloseModalInscription} />
                    <ModalLogin show={openModalLogin} onHide={handleCloseModalLogin} />

                </div>
            </Container >
        </Navbar >
    </>;
}

export default NavBar;