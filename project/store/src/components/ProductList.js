import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FETCHING_PRODUCTS = 1;
const FETCHED_PRODUCTS = 2;
const ERROR_FETCHING_PRODUCTS = 3;

class ProductList extends React.Component {

    constructor( props ){
        super( props );
        this.state = {
            products: null,
            error: null,
            status: ''
        };
    }

    render() {
        let el;
        switch(this.state.status){
            case FETCHING_PRODUCTS:
                el = (
                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <strong>Products are being fetched!</strong>
                    </div>
                );
            break;
            case FETCHED_PRODUCTS:
                el = (
                    <div className="row">
                        { 
                            this.state.products.map( item => (
                                <div className="col-3">
                                    <Link to={'/products/' + item.id}>
                                        <div className="card">
                                            <img className="card-img-top" src={item.imageUrl} alt="" />
                                            <div className="card-body">
                                            <h4 className="card-title">{item.name}</h4>
                                            <p className="card-text">{item.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                );
            break;
            case ERROR_FETCHING_PRODUCTS:
                el = (
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>{this.state.error.message}</strong>
                    </div>
                );
            break;
        };
        return(
            <React.Fragment>
                <div className="container">
                <h2>Product Catalog</h2>
                <hr/>
                {el}
                </div>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.setState({ 
            status: FETCHING_PRODUCTS
        },
        () => {
            axios.get(`http://awesome-store-server.herokuapp.com/products`)
            .then( response => response.data )
            .then((products) => {
                this.setState({ 
                    status: FETCHED_PRODUCTS,
                    products: products
                });
            })
            .catch((error) => {
                this.setState({ 
                    status: ERROR_FETCHING_PRODUCTS,
                    error: error
                });
            });
        });
    }
}

export default ProductList;