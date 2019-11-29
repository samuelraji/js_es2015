
import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counter';
import formReducer from './reducers/formReducer';


export default createStore( 
    combineReducers({
        counter: counterReducer,
        form: formReducer
    })/* , 
    {
        counter:{ count: 0 },
        form:{ name: '' } 
    } */
);