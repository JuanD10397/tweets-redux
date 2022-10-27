const initialProps = {
    stateModalAddTweet: false // El modal va a estar cerrado
}

// Esto va a recibir un estado, si no recibe, como default tendrá el initial Props
// También va a recibir un action, es una acción que va a disparar algo
export default function (state = initialProps, action) {

    // En los reducers se tratan con switchs
    // En el action.type vamos a pasarle la acción que queremos ejecutar.
    // Para seleccionar las acciones lo manejaremos con switches

    switch(action.type) {
        // Es recomendado que el estado esté en mayúsculas y que como mínimo tenga 2 palabras
        case "STATE_ADD_TWEET_MODAL":
            return {
                // Va a retornar el estado y le va a añadir lo nuevo
                ...state,
                stateModalAddTweet: action.payload
                //payload será el valor que tomará nuestro nuevo estado (en este caso true o false)
            }
        default:
            return state;
    }
}