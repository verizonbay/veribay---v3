import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>Help and Support</h1>
      <br />
      <br />



      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><Link to="/returns">Returns And Refunds</Link></h5>
              <p class="card-text">Manage returns, missing items and refunds for sellers</p>

            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><Link to="shipping">Shipping and Tracking</Link></h5>
              <p class="card-text">Track your Product location now</p>

            </div>
          </div>
        </div>
      </div><br />
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><Link to="/sellers" >Selling and Bidding</Link></h5>
              <p class="card-text">we help in creating a successful listing</p>

            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><Link to="buyers">Buyers</Link></h5>
              <p class="card-text">Customers are our priority</p>

            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><Link to="accounts">Account</Link></h5>
              <p class="card-text">Any help with your account?</p>

            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><Link to="fees">Fees and invoices</Link ></h5>
              <p class="card-text">Know more about your selling fees and product invoices</p>

            </div>
          </div>
        </div>
      </div>



      <div>

        <br /><br />
        <br /><br />
        <h3> Hi how can i help you Today?</h3>
        <br /><br />
        enter Name:<input type="text" /><br /><br />
        enter email:<input type="text" /><br /><br />
        enter mobile:<input type="text" /><br /><br />
        enter Query:<input type="text" />

        <br />
        <br />

        <Button variant="primary" onClick={handleShow}>
          Submit
        </Button>
      </div>


      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thankyou</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your Response have been submitted successfully, our customer executive will reach you soon</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </div>
    </div>

  );
}

