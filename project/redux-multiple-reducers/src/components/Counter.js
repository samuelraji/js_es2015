import React from 'react';
import { incrementAC, decrementAC} from '../actions/creators';
import store from '../store';

export default class Counter extends React.Component {
    constructor( props ){
        super( props );
    }

    increment = () => {
        store.dispatch( incrementAC() );
    }

    dicrement = () => {
        store.dispatch( decrementAC() );
    }
    
    render() {
        return( 
            <div> 
                <button onClick = {this.increment}>INCREASE</button>
                <button onClick = {this.dicrement}>DICREASE</button>

                Count is: {store.getState().counter.count}
            </div>
        );
    }

    componentDidMount() {
        store.subscribe( this.forceUpdate.bind(this) );
    }
}
