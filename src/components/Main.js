import React from 'react'
import ProductsView from './ProductsView';
import Wishlist from './Wishlist';
import { connect } from 'react-redux';
import { selectproduct, fetchProductsByFilter, fetchSelectedProducts, fetchProducts } from '../Actions';
import Sell from './Sell'
import Cart from './Cart'


class Main extends React.Component {

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

        let addCartModalClose = () =>
        this.setState({addCartModalShow: false });


        return (
            <React.Fragment>
                <hr />
                <center>
                    <h1> Shopping Items </h1>
                </center>
                <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4 container">
                    <div className="input-group">
                        <input type="search" id="search" placeholder="What're you searching for?" 
                                aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                            <div className="input-group-append">
                                <button id="button-addon1" type="submit" className="btn btn-link text-warning"><i className="fa fa-search"></i></button>
                            </div>
                         </div>
                    </div>
                    <button onClick={() => this.setState({ addCartModalShow: true })}
                                        className="btn btn-danger btn-lg shopping"><i className="fa fa-shopping-cart" /></button>
                    <Cart list={this.state.list} show={this.state.addCartModalShow} onHide={addCartModalClose} />
                <ProductsView />
            </React.Fragment>
                )
            }
        }
const mapStateToProps = state => ({selectedProduct: state.selectedProduct,productsList: state.proddatas });
export default connect(mapStateToProps, {selectproduct, fetchProductsByFilter, fetchSelectedProducts, fetchProducts})(Main);
                
                
                
                    /*
                      //  this.props.fetchProducts();
                        let addModalClose = () =>
            this.setState({addModalShow: false },
                );
    
            let addCartModalClose = () =>
            this.setState({addCartModalShow: false },
                );
    
    
    
       <div className="row">
                    <div className="col-md-1">
                        {localStorage.getItem("userData") ?
                            <div>
                                <div>
                                    <button className="btn btn-primary" onClick={() => this.setState({ addModalShow: true })}
                                    >Add Product</button>
                                    <Sell show={this.state.addModalShow} onHide={addModalClose} />
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
                                    <div className="card">
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
                                    </div>
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
                            <div >
                                <div style={{ paddingLeft: 270, paddingTop: 60 }}>
                                    <button onClick={() => this.setState({ addCartModalShow: true })}
                                        className="btn btn-lg btn-outline-dark"><i className="fa fa-shopping-cart" /></button>

                                    <Cart list={this.state.list} show={this.state.addCartModalShow} onHide={addCartModalClose} />
                                </div>
                                <div style={{ paddingBottom: 90 }}>
                                    <br /><br /><br />
                                    <Wishlist />
                                </div>
                            </div>
                        }
                    </div>
                </div>



                */
