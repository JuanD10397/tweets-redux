import React from 'react';
import { Modal as ModalB } from 'react-bootstrap';
// Dispatch es para cerrar el Modal y Selector es para acceder al valor del estado del Modal
import { useDispatch, useSelector } from 'react-redux';

// Mi Acción
import { openCloseAddTweetModalAction } from '../actions/modalsActions';


export default function Modal(props) {
    
    // Children es lo que renderizará el Modal. Es el children que tenga en el App.js
    const {children} = props;

    // Dispatch para ejecutar nuestras acciones
    const dispatch = useDispatch();
    // Es lo mismo que en las líneas 12 a 19 en Menu.js pero aquí está abreviado en una sola línea
    const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

    // Acceder a un valor en el store. Acceder al valor del estado del Modal
    // Todos los States están almacenados en el store (esto lo puedo ver en ReduxDevTools del navegador)
    const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);
    console.log(isOpenModal);

    return (
        <ModalB
            show={isOpenModal}
            onHide={() => closeModal(false)}
            size="lg"
            aria-labelledby="modal"
            centered
        >
            {children}
        </ModalB>
    )
}