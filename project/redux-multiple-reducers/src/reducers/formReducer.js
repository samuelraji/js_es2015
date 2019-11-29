import { UPDATE_NAME } from '../actions/constants';

export default function formReducer(curState = { name: 'nagesh' }, action) {
    let newState;

    switch( action.type ) {
        case UPDATE_NAME:
            newState = { ...curState, name: action.payload.name }
            break;
        default: 
            newState = curState;
    }
    return newState;
}