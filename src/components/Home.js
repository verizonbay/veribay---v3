import React from 'react'
import ProductsView from './ProductsView';
import Wishlist from './Wishlist';
import { connect } from 'react-redux';
import { selectproduct, fetchProductsByFilter, fetchSelectedProducts, fetchProducts } from '../Actions';
import Sell from './Sell'
import Cart from './Cart'
import Product from './Product';


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            addModalShow: false,
            addCartModalShow: false,
            showWishListComponent: false,
            list: [],
            id: []
        }
    }

    componentDidUpdate = () => {

        console.log(this.state.list, "From -<.")
    }

    saveCart = (data, id) => {
        //this.props.fetchProducts();
        console.log("From Home ", data)
        this.setState({
            list: [...this.state.list, data],
            id: [...this.state.id, id]
        })

        //     // this.state.list.map(
        //     //     listItem => {
        //     //         console.log(listItem.username, listItem.product_name)
        //     //         axios.post('http://192.168.20.121:8097/registerSale',
        //     //             {
        //     //                 username: listItem.username,
        //     //                 product_name: listItem.product_name
        //     //             }
        //     //         )
        //     //             .then(response => console.log(response))
        //     //             .catch(error => console.log(error))
        //     //     }
        //     // )
    }



    cartList = () => {
        // alert("dd")
        this.setState({
            cartFlag: true
        })




    }

    sendFilter = (event) => {
        this.props.fetchProductsByFilter(event.target.name)
    }

    SearchByCategory = (event) => {
        // this.props.fetchProducts();
        let prod = this.props.productsList;
        console.log("abcjeni", prod)
        let productsData = prod.filter(
            product => (
                product.product_category === event.target.name
            )
        )

        this.props.fetchSelectedProducts(productsData);
    }
    render() {
        //  this.props.fetchProducts();
        let addModalClose = () =>
            this.setState({ addModalShow: false },
            );

        let addCartModalClose = () =>
            this.setState({ addCartModalShow: false },
            );





        return (
            <React.Fragment>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/blur-1850082_960_720.jpg" classname="d-block w-100"
                            className="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2016/11/20/08/58/arranged-1842261_960_720.jpg" class="d-block w-100" className="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-1">
                            {localStorage.getItem("userData") ?
                                <div>
                                    <div>

                                    </div>
                                    <br />
                                    <div>
                                        <div className="card">
                                            <div className="card-header">
                                                Filter By Price
                                        </div>
                                            <div className="card-body">
                                                <button className="btn btn-sm btn-dark" name="lowToHigh" onClick={this.sendFilter} > <i className="fa fa-arrow-down" /> - <i className="fa fa-arrow-up" /> </button><br /><br />
                                                <button className="btn btn-sm btn-dark" name="highToLow" onClick={this.sendFilter} > <i className="fa fa-arrow-up" /> - <i className="fa fa-arrow-down" /></button>

                                            </div>
                                        </div>
                                        <br />
                                        {/* <div className="card">
                                        <div className="card-header">
                                            Filter By Category
                                        </div>
                                        <div className="card-body">
                                            <button className="btn btn-sm btn-dark" name="electronics" onClick={this.SearchByCategory} > electronics</button><br /><br />
                                            <button className="btn btn-sm btn-dark" name="automobile" onClick={this.SearchByCategory} > automobile</button><br /><br />
                                            <button className="btn btn-sm btn-dark" name="accessories" onClick={this.SearchByCategory} > accessories</button><br /><br />
                                            <button className="btn btn-sm btn-dark" name="House utilities" onClick={this.SearchByCategory} >House utilities</button><br /><br />
                                            <button className="btn btn-sm btn-dark" name="Clothing" onClick={this.SearchByCategory} >Clothing</button><br /><br />
                                            <button className="btn btn-sm btn-dark" name="others" onClick={this.SearchByCategory} >others</button><br /><br />
                                        </div>
                                    </div> */}
                                    </div>

                                </div>
                                :
                                <div>

                                </div>
                            }
                        </div>
                        <div className="col-md-8">
                            <ProductsView getCart={this.saveCart} />
                        </div>
                        <div className="col-md-2">
                            {localStorage.getItem("userData") &&
                                <div>
                                    <div style={{ paddingLeft: 270, paddingTop: 60 }}>
                                        <button onClick={() => this.setState({ addCartModalShow: true })}
                                            className="btn btn-lg btn-outline-dark"><i className={localStorage.getItem("cartCounter") > 0 ? "fa fa-shopping-cart" : "fa fa-cart-plus"} />
                                        </button>
                                        <Cart list={this.state.list} show={this.state.addCartModalShow} onHide={addCartModalClose} />
                                    </div>
                                    <div>
                                        <button className="btn btn-dark" onClick={() => this.setState({ addModalShow: true })}
                                        >Add Product</button>
                                        <Sell show={this.state.addModalShow} onHide={addModalClose} />
                                    </div>
                                    <div style={{ paddingBottom: 90 }}>
                                        <br /><br /><br />
                                        <Wishlist />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>




                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({ selectedProduct: state.selectedProduct, productsList: state.proddatas });
export default connect(mapStateToProps, { selectproduct, fetchProductsByFilter, fetchSelectedProducts, fetchProducts })(Home);