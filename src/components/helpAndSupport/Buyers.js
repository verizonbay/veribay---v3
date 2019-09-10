import React from 'react';
import { Link } from 'react-router-dom'
const Buyers = () => (
  <div>
    <div style={{float:'right', paddingTop:15, paddingRight:100}}>      
      <Link to="helpAndSupport"><button className="btn btn-secondary btn-outline">Back</button></Link>
    </div>
      <h1>Welcome to Buyers Page</h1>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-6">Buyers</h1>
    <p class="lead">
        We provide the best products and services for our customers which include immediate shipping, customer care support and live tracking.
    </p>
  </div>
</div>

  </div>
);

export default Buyers;
