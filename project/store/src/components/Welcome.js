import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar(props) {
    return(
        // <div> Welcome to the store!</div>
        <div className="jumbotron">
            <h1 className="display-3">Awesome Store!</h1>
            <p className="lead">Welcome to Awesome Store. There is not  
                a think in the whole wide world you can not 
                find here.</p>
            <hr className="my-2" />
            <p className="lead">
                <a href="Jumbo action link" role="button">here</a>
            </p>
        </div>
    );
}