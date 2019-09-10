import React from 'react'

import { Link } from 'react-router-dom'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

export default class Cart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            total: 0,
            noOfItems: 0
        }
    }

    saveCart = () => {
        alert("asd")
    }

    getTotal = () => {
        let total = 0
        this.props.list.map(
            data => (
                total += data.product_price
            )
        )
        return total
    }

    render() {

        let cartData =
            this.props.list.map(
                (product, id) => <tr key={id}>
                    <td>{product.product_name}</td><td></td><td></td>
                    <td>{product.product_price}</td>
                </tr>
            )

        return (
            <div>
                <Modal {...this.props}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {localStorage.getItem("userData").split('-')[0].split('@')[0][0].toUpperCase()
                        + localStorage.getItem("userData").split('-')[0].split('@')[0].slice(1,)
                        }  Cart :
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div >
                                <table style={{textAlign:'center'}}>
                                    <thead>
                                        <th>Product</th>
                                        <th>Price</th>
                                    </thead>
                                    <tbody >
                                        {cartData}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div>
                            total: {this.getTotal()}
                        </div>
                        <ButtonToolbar>
                            <Link to="/payment"> <Button onClick={this.handleSubmit}>Buy Now</Button></Link>
                            &nbsp;&nbsp;
                            <Button variant="secondary" onClick={this.props.onHide} >Cancel</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}