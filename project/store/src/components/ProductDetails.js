import React from 'react';
import axios from 'axios';

const FETCHING_PRODUCTS = 1;
const FETCHED_PRODUCTS = 2;
const ERROR_FETCHING_PRODUCTS = 3;

class ProductDetails extends React.Component {

    constructor( props ){
        super( props );
        this.state = {
            productsDetails: null,
            productId: this.props.match.params.id,
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
                    
                            {/* this.state.productsDetails */}

                            <div className="col-3">
                                <div className="card">
                                    <img className="card-img-top" src={this.state.productsDetails.imageUrl} alt="" />
                                    <div className="card-body">
                                    <h4 className="card-title">{this.state.productsDetails.name}</h4>
                                    <p className="card-text">{this.state.productsDetails.price}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    <span className="sr-only">Close</span>
                                </button>
                                <strong>{this.state.productsDetails.description}</strong>
                            </div>
                    
                    </div>
                );
            break;
            case ERROR_FETCHING_PRODUCTS:
                el = (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
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
            axios.get(`http://awesome-store-server.herokuapp.com/products/${this.props.match.params.id}`)
            .then( response => response.data )
            .then((productsDetails) => {
                this.setState({ 
                    status: FETCHED_PRODUCTS,
                    productsDetails: productsDetails
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

export default ProductDetails;