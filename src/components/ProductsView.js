import React from 'react'
import Product from './Product';
import { connect } from 'react-redux';
import { fetchProducts, selectproduct, fetchProductsByFilter, fetchSelectedProducts } from '../Actions';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import ProductCard from './ProductCard';

//import  '../styles1.css'


class ProductsView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            addModalShow: false,
            showProduct: false,
            list: [],
            cartCounter:0
        }
    }


    componentDidMount() {
        this.props.fetchProducts();
    }


    goBack = () => {
        localStorage.setItem("wishList", true)
        localStorage.removeItem("productSelected")
        this.setState({
            showProduct: false
        })
    }

    goToSell = () => {
        this.setState({
            showSell: true
        })
    }



    displayProduct = (value, id) => {

        this.setState({
            showProduct: value
        })

        this.props.selectproduct(this.props.productsList[id]);
    }

    handleCart = (product) => {
        alert("Added to Cart")

        localStorage.setItem("cartCounter",this.state.cartCounter+1)
        this.setState({
            list: [...this.state.list, product]
        })

        this.props.getCart(product)
    }

    searchChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.fetchProductsByFilter("Nothing");

    }

    handleSearch = () => {


        let productsData = this.props.productsList.filter(
            product => (
                (product.product_name.toLowerCase().includes(this.state.searchText.toLowerCase()))
            )
        )

        this.props.fetchSelectedProducts(productsData);
    }



    render() {



        let products = (this.props.productsList.length > 0) ? this.props.productsList.map(
            (product, id) =>
                <div key={id}>
                    {console.log(this.props.filter, "dasda")}
                    
                    
                    <ProductCard id={id} product={product} onDisplayProduct={this.displayProduct} displayHandleCart={this.handleCart} />
                </div>
        ) : <div>
                No Search Results Found
                </div>


        return (
            <React.Fragment>
                <div>
                    {console.log("---->", "Mobile Phone".toLowerCase().includes("phone"))}
                    {this.state.showProduct ?
                        <React.Fragment>
                            <button className="btn btn-outline-primary" onClick={this.goBack}>Back</button>
                            <Product id={this.state.productId} />
                        </React.Fragment>
                        :
                        <div>
                            <div style={{ paddingLeft: 300 }}>
                                <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4 container">
                                    <div className="input-group">
                                        <input type="search" id="search"
                                            placeholder="What're you searching for?" aria-describedby="button-addon1" name="searchText"
                                            onChange={this.searchChangeText}
                                            className="form-control border-0 bg-light" />
                                        <div className="input-group-append">
                                            <button id="button-addon1" onClick={this.handleSearch} type="submit" className="btn btn-link text-warning"><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div >
                                                {products}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    }
                    {console.log(this.state.list)}
                </div>




            </React.Fragment>


        )
    }
}
const mapStateToProps = state => ({ productsList: state.proddatas });
export default connect(mapStateToProps, { fetchProducts, selectproduct, fetchSelectedProducts, fetchProductsByFilter })(ProductsView);
