import React from 'react';
import store from '../store';
import { updateNameAC } from '../actions/creators';
/* import { incrementAC } from '../actions/creators';
import store from '../store'; */

export default class UserForm extends React.Component {
    constructor( props ){
        super( props );
    }

    onChangeofName = ( event ) => {
        const name = event.target.value;
        store.dispatch( updateNameAC(name) );
    }

    render() {
        return( 
            <div>
                Name: <input type="text" id="name" onChange={this.onChangeofName} value={store.getState().form.name} />
                {store.getState().form.name}
            </div>
        );
    }

    componentDidMount() {
        store.subscribe( this.forceUpdate.bind(this) );
    }
}
