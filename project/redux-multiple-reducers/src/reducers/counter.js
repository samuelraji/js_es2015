import { INCREMENT, DECREMENT } from '../actions/constants';

export default function counterReducer(curState, action) {
    let newState;

    switch( action.type ) {
        case INCREMENT:
            newState = { ...curState, count: curState.count +1 }
            break;
        case DECREMENT:
            newState = { ...curState, count: curState.count - 1}   
            break;
        default: 
            newState = curState;
    }
    return newState;
}