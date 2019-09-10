import React from 'react';
import { Link } from 'react-router-dom'

const Sellers = () => (
  <div>
    <div style={{float:'right', paddingTop:15, paddingRight:100}}>      
      <Link to="helpAndSupport"><button className="btn btn-secondary btn-outline">Back</button></Link>
    </div>
      <h1>Welcome to Sellers Page</h1>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-6">Listing</h1>
    <p class="lead">When listing your item
It's important to set proper expectations for the buyer – make sure your listing title and item descriptions are accurate, and include plenty of photos, making sure to highlight any scuffs or blemishes
Provide as many item specifics as you can – you want the buyer to know exactly what they're buying
State your return policy clearly in your listing. If you're happy to accept returns, you can automatically accept them, issue refunds, and even provide return shipping. This can make the process much easier for the buyer, and much less effort for you
When stating your handling time, make sure it's something you can manage. Failing to ship on time can lead to your item arriving late
To help you get paid quickly and avoid unpaid item claims, set your payment preferences to require immediate payment on Buy It Now or Auction Buy It Now purchases
Choose a shipping method with insurance and shipment tracking</p>
  </div>
</div>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-6">About Bidding</h1>
    <p class="lead">In an auction-style listing, sellers name a starting price and you bid against other buyers. You can watch the item to see how the bidding is going. When the listing ends, the highest bidder wins the item and completes the purchase.</p>
  </div>
</div>

  </div>
);

export default Sellers;
