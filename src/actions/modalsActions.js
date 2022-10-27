
// Función que va a abrir y cerrar el Modal
// Recibe un state, es el nuevo estado del modal, true o false (abrir o cerrar el modal)
export const openCloseAddTweetModalAction = state => {
    return {
        type: "STATE_ADD_TWEET_MODAL", // El type es el tipo de caso a ejecutar. Es el mismo que está en modalsReducer.js
        payload: state // payload es el nuevo estado que tendrá el modal (true o false)
    };
};