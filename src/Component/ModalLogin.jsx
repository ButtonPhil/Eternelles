import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { login } from '../Service/clientService.js';




function ModalLogin(props) {

    const [clientData, setClientData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        // console.log(clientData);
        try {

            const response = await login(clientData)
            localStorage.setItem("token", response.data.token);
            navigate('/Eternelles')

            alert("Vous etes connecter")

        } catch (error) {

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
                        Connexion
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Col} md="4" controlId="validation">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                value={clientData.email} onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validation">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                value={clientData.password} onChange={(e) => setClientData({ ...clientData, password: e.target.value })}
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button type="submit">Connexion</Button>
                            <Button onClick={props.onHide}>Close</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body >
            </Modal >
        </>
    );
}

export default ModalLogin;