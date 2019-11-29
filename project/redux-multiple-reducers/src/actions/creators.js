
import {INCREMENT, DECREMENT} from './constants';
 // "action creators" - functions that return "actions" (i.e object representing actions in the app)
function incrementAC() {
    return {
        type: INCREMENT
    };
}
function decrementAC() {
    return {
        type: DECREMENT
    };
}


export {
    incrementAC,
    decrementAC
};