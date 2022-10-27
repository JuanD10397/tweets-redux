import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4} from "uuid";
import moment from "moment";
//Mis Acciones
import { validationFormAddTweetAction } from '../actions/validationsActions';
import { addTweetAction } from '../actions/tweetsActions';
import { openCloseAddTweetModalAction } from '../actions/modalsActions';


export default function FormAddTweet() {

    const [ formValue, setFormValue ] = useState({
        name: "",
        tweet: ""
    });

    // Inicialización del dispatch y ejecución de las acciones
    const dispatch = useDispatch();
    const errorForm = state => dispatch(validationFormAddTweetAction(state));
    const addTweet = state => dispatch(addTweetAction(state));
    const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

    // Obtener estado de la validación del formulario
    const errorFormValue = useSelector(
        state => state.validations.errorFormAddTweet
    );

    const onChange = e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();

        const { name, tweet } = formValue;

        // Si los campos están vacíos entre
        if(!name || !tweet){
            errorForm(true); 
        } else {
            errorForm(false); // Seteo el valor del errorForm
            addTweet({
                id: uuidv4(),
                name,
                tweet,
                date: moment()
            });
            closeModal(false);
            //console.log("Tweet enviado correctamente");
            //console.log(formValue);
        }
    }


    return (
        <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
            <Form.Group className="text-center">
                <h1>Nuevo Tweet</h1>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" name="name" placeholder="Escribe tu nombre" />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    as="textarea"
                    name="tweet"
                    row="3"
                    placeholder="Escribe lo que quieres comunicar..."
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar Tweet
            </Button>

            { // Si el Form tiene un error
            errorFormValue && (
                <Alert variant="danger" className="mt-4">
                    Todos los campos son obligatorios
                </Alert>
            )}
        </Form>
    )
}