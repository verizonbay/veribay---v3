import React from 'react';
import { Link } from 'react-router-dom'

const Returns = () => (
  <div>
    <div style={{float:'right', paddingTop:15, paddingRight:100}}>      
      <Link to="helpAndSupport"><button className="btn btn-secondary btn-outline">Back</button></Link>
    </div>
      <h1>Welcome to Returns and Refunds</h1>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-6">Returns</h1>
    <p class="lead">
        <h5>We accept return of products if:</h5><li>Damaged</li><li>Doesn't match description </li><li>Found a better item</li>
        After you have initiated a return it takes atmost 3 business days for the seller to repond to your query.
    </p>
  </div>
</div>


<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-6">Refunds</h1>
    <p class="lead">
    Get your refund
If the seller offers to give you your money back, they have 2 business days to issue your refund. When they do, you'll receive an email letting you know.
If you paid with a credit card, it may take up to 30 days to process, depending on your card provider.
Get 100% refunds on products if the product is not in good condition or satisfy your expectation.</p>
  </div>
</div>

  </div>
);

export default Returns;
