
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar(props) {
    return(
        <nav className="navbar navbar-expand navbar-light bg-light">
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/products">Products</a>
                </li>
            </ul>
        </nav>
    );
}