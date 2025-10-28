import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { register } from '../Service/clientService'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




function ModalInscription(props) {

    const [clientData, setClientData] = useState({ nom: "", prenom: "", email: "", password: "", adresse: "", pays: "", role: "1" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await register(clientData)
            navigate('/')
            toast.success("Creation de compte employer", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } catch (error) {

            toast.error('erreur pendant votre inscription', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            console.error(error);

        }

    };

    return (

        <>

            <Modal
                show={props.show}
                onHide={props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Inscription
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validation-nom">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nom"
                                    value={clientData.nom}
                                    onChange={(e) => setClientData({ ...clientData, nom: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validation-prenom">
                                <Form.Label>Prenom</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Prènom"
                                    value={clientData.prenom}
                                    onChange={(e) => setClientData({ ...clientData, prenom: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validation-email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email"
                                    value={clientData.email}
                                    onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validation-password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    value={clientData.password}
                                    onChange={(e) => setClientData({ ...clientData, password: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validation-adresse">
                                <Form.Label>Adresse</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Adresse"
                                    value={clientData.adresse}
                                    onChange={(e) => setClientData({ ...clientData, adresse: e.target.value })}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validation-pays">
                                <Form.Label>Pays</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Pays"
                                    value={clientData.pays}
                                    onChange={(e) => setClientData({ ...clientData, pays: e.target.value })}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Modal.Footer>
                            <Button type="submit">Valider l'inscription</Button>
                            <Button onClick={props.onHide}>Close</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalInscription;