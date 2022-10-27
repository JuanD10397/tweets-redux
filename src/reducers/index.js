import { combineReducers } from 'redux';
// Mis Reducers
import modalsReducer from './modalsReducer';
import validationReducer from './validationReducer';
import tweetsReducer from './tweetsReducer';

// Aquí exportaré todos los reducers que tengo combinados
export default combineReducers({
    modals: modalsReducer,
    validations: validationReducer,
    tweets: tweetsReducer
});