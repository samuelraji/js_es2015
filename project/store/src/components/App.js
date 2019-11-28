import React from 'react';
import {Route} from 'react-router';

import NavBar from './NavBar';
import Welcome from './Welcome';
import ProductList from './ProductList';

export default function App(props) {
    return(
        <div>
            <NavBar/>
            <Route path="/" exact={true} component={Welcome} />
            <Route path="/products" component={ProductList} />
        </div>
    );
}