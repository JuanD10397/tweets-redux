import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import LogoRedux from '../assets/img/redux.png';
//Mis Acciones
import { openCloseAddTweetModalAction } from '../actions/modalsActions';

export default function Menu() {

    // Dispatch para ejecutar nuestras acciones.
    const dispatch = useDispatch();
    const openCloseAddTweetModal = state => {
        dispatch(openCloseAddTweetModalAction(state));
    };

    // Función que abre Modal
    const openModal = () => {
        openCloseAddTweetModal(true);
    }
        

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img 
                        alt="Tweets Simulator Redux"
                        src={LogoRedux}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-4"
                    />
                    Tweets Simulator REDUX
                </Navbar.Brand>
                <Button variant="outline-success" onClick={openModal}>
                    Nuevo Tweet
                </Button>
            </Container>
        </Navbar>
    );
}