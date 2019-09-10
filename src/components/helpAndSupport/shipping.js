import React from 'react';
import { Link } from 'react-router-dom'
const Shipping = () => (
  <div>
    <div style={{float:'right', paddingTop:15, paddingRight:100}}>      
      <Link to="helpAndSupport"><button className="btn btn-secondary btn-outline">Back</button></Link>
    </div>
      <h1>Welcome to Shipping and Tracking Page</h1>
      <br/> <br/> <br/>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-6">Shipping and Tracking</h1>
    <br/>
    <p class="lead"><h5>International shipping</h5>
When purchasing from an overseas seller, keep in mind that international shipping can cost more, and possibly take longer to get to you, than when you buy from a domestic seller. In some cases, you may also have to pay import charges.
If your seller is using VeriBay's Global Shipping Program, all the logistical challenges of international shipping, such as customs clearance, will be taken care of for you. You'll pay any import charges up front, so you won't pay anything extra when your item's delivered. You'll also benefit from international tracking.
If your seller doesn't participate in the Global Shipping Program, you can still buy from them. However, how you pay fees and import charges will differ.
<br/><br/>
<h5>Customs and import charges</h5>
When you buy from an international seller, you'll often have to pay import charges. These charges are generally based on the item's price, weight, dimensions, and country of origin, as well as any local taxes, duties, and fees.</p>
  </div>
</div>

  </div>
);

export default Shipping;
