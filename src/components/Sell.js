import React from 'react'
import axios from 'axios';
import { Modal, Button, Form, ButtonToolbar } from 'react-bootstrap';


export default class Sell extends React.Component {

  constructor() {
    super()
    this.state = {
      username: '',
      product_type: '',
      product_name: '',
      product_category: '',
      short_desc: '',
      long_desc: '',
      product_price: '',
      product_minimumbid: '',
      product_images: '',


    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleFileChange = (event) => {
    this.setState({
      product_images: event.target.files[0]
    })

  }


  handleSubmit = (evt) => {

    //    const list = {
    // 	username: this.state.username,
    // 	product_type: this.state.product_type,
    //     product_name: this.state.product_name,
    //     product_category: this.state.product_category,
    //     short_desc: this.state.short_desc,
    //     long_desc: this.state.long_desc,
    //     product_minimumbid: this.state.product_minimumbid,
    //     product_price: this.state.product_price,
    //     product_images: this.state.product_images
    // }

    let saleData = new FormData()

    console.log(this.state)
    saleData.append("username", this.state.username);
    saleData.append("product_type", this.state.product_type);
    saleData.append("product_name", this.state.product_name);
    saleData.append("product_category", this.state.product_category);
    saleData.append("short_desc", this.state.short_desc);
    saleData.append("long_desc", this.state.long_desc);
    saleData.append("product_minimumbid", Number(this.state.product_minimumbid).valueOf());
    saleData.append("product_price", Number(this.state.product_price).valueOf());
    saleData.append("product_images", this.state.product_images);



    axios.post("http://192.168.20.121:9098/registerProduct", saleData)
      .then(response => console.log(response))
      .catch(error => console.log(error))

    alert("added Successfully")

    window.location = '/';
  }

  render() {
    return (
      <div>
        <Modal {...this.props}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Sell Products here...
              </Modal.Title>

          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <Form>
                {/* <input type="text" name="name"/> */}
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Product Type</Form.Label>
                  <Form.Control type="text" name="product_type" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" name="product_name" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Product Category</Form.Label>
                  <Form.Control type="text" name="product_category" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Short Description</Form.Label>
                  <Form.Control type="text" name="short_desc" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Long Description</Form.Label>
                  <Form.Control type="text" name="long_desc" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Bid Amount</Form.Label>
                  <Form.Control type="number" name="product_minimumbid" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" name="product_price" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" name="product_images" onChange={this.handleFileChange} />
                </Form.Group>
              </Form>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>

              <Button onClick={this.handleSubmit}>Add Product</Button>
              &nbsp;&nbsp;
              <Button variant="secondary" onClick={this.props.onHide} >Cancel</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }

}