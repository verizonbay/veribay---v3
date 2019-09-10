import React from 'react'
import { connect } from 'react-redux';
import { selectproduct } from '../Actions';

class ProductCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            addedToCart: false
        }
    }

    displaySingleProduct = (event) => {

        localStorage.setItem("productSelected", "true")

        console.log(this.props.product)
        this.props.onDisplayProduct(true, this.props.id)
    }

    displayHandleCart = () => {
        if (localStorage.getItem("userData") == null) {
            alert("Please Login First")
            return
        }
        this.setState(
            { addedToCart: !this.state.addedToCart }
        )
        this.props.displayHandleCart(this.props.product)
    }

    render() {

        let product = this.props.product
        let id = this.props.id

        return (
            <div className="container" key={id}>
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <div className="p-2 bd-highlight">
                            <div className="card" >
                                <img className="card-img-top" alt="../assets/profilePic2.jpg"
                                    src={`data:image/png;base64,${product.product_images}`} style={{ width: "200px", height: "220px" }} />
                            </div>
                        </div>

                        <div className="p-2 bd-highlight flex-grow-1">
                            <div className="card" >
                                <div className="card-header">
                                    {product.product_name}
                                </div>
                                <div className="card-body">
                                    {/* <h5 className="card-title">{product.product_name}</h5> */}
                                    {/* <a href="#" class="badge badge-secondary"><cite title="Source Title">Product Type</cite></a> */}
                                    <p className="card-text"> {product.short_desc}</p>
                                    <h3><b>${product.product_price}</b></h3>

                                    <button className="btn btn-outline-primary " name={id} onClick={this.displaySingleProduct}>
                                        More Info ->
                                </button>&nbsp;
                                
                                <button className="btn btn-outline-primary " name={id} onClick={this.displayHandleCart}>
                                        {this.state.addedToCart ? "Added" : "Add To Cart"}
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({ productsList: state.proddatas });
export default connect(mapStateToProps, { selectproduct })(ProductCard);



{/* <div class="card bg-light mb-3">
<div class="card-header">Category</div>
    <div class="card-body">
    <div class="row no-gutters">
        <div class="col-auto">
            <img src="https://images.unsplash.com/photo-1539713904642-b4d144f769d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="product_image">
        </div>
        <div class="col">
            <div class="card-block px-2">
                <h4 class="card-title">Product Name</h4>
                  <p class="card-text max-lines">Description blah blah blah blahblah blahblah blahblah blah....Description blah blah blah blahblah blahblah blahblah blah....Description blah blah blah blahblah blahblah blahblah blah</p>
                 <h4> Price : <span class="price">13$</span></h4>
                <div class="btn-group" role="group" aria-label="Basic example">
                     <button type="button" class="btn btn-secondary">More Info</button>
                  <button type="button" class="btn " style="background-color:#ff4444; color:white;">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
</div> */}