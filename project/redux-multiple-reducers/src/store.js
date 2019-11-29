
import { createStore } from 'redux';
import counterReducer from './reducers/counter';

export default createStore( counterReducer, { count: 0 } );