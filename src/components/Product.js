import React from 'react'
import { Link  } from 'react-router-dom'
//import AwesomeSlider from 'react-awesome-slider';
import '../styles.css';
import Bidding from '../components/Bidding';

import { connect } from 'react-redux';
import { selectproduct } from '../Actions';

class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productList: this.props.productList,
            productId: this.props.id,
        }
    }


    goToPayment = () => {
        this.setState({
            showProductDesc: true
        })
    }

    render() {


        let productDesc =

            <div > 
                <div className="card" style={{ width: '50rem' }}>
                    <div className="card-header">
                        {this.props.selectedProduct.product_name}
                    </div>

                    <div className="card-body"  >
                        <div>
                            <img style={{ height: '20rem', width: '100%' }}
                                className="card-img-top"
                                src={`data:image/png;base64,${this.props.selectedProduct.product_images}`}
                                alt="../assets/profilePic2.jpg"
                            />
                        </div>
                    </div>
                    <div className="card-footer">
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ paddingBottom: 70 }}><strong>Description</strong></td><td></td><td style={{ paddingBottom: 70 }}>:</td><td></td><td style={{ paddingTop: 50 }}>{this.props.selectedProduct.long_desc}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingBottom: 70 }}><strong>Category</strong></td><td></td><td style={{ paddingBottom: 70 }}>:</td><td></td><td style={{ paddingBottom: 70 }}>{this.props.selectedProduct.product_category}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingBottom: 70 }}><strong>Type</strong></td><td></td><td style={{ paddingBottom: 70 }}>:</td><td></td><td style={{ paddingBottom: 70 }}>{this.props.selectedProduct.product_type}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <Bidding minbid={this.props.selectedProduct.product_minimumbid} price={this.props.selectedProduct.price} allProducts={this.state.productList}
                                productId={this.state.productId} username={this.props.selectedProduct.username} />
                        </div>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <Link to="/payment">  <center><button onClick={this.goToPayment} className="btn btn-outline-primary">Buy Now</button></center></Link>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                  
                {/* <div className="card" style={{paddingRight:"40rem"}}>
                    <h1>hey</h1>
                </div>
                 */}

            </div>


        return (
            <div>
                {productDesc}
            </div>
        )
    }
}

const mapStateToProps = state => ({ selectedProduct: state.selectedProduct });
export default connect(mapStateToProps, { selectproduct })(Product);

