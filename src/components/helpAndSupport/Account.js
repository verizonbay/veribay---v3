import React from 'react';
import { Link } from 'react-router-dom'

const Account = () => (
  <div>
    <div style={{float:'right', paddingTop:15, paddingRight:100}}>      
      <Link to="helpAndSupport"><button className="btn btn-secondary btn-outline">Back</button></Link>
    </div>
    <br /><br />
    <h1>Welcome to Sellers Page</h1>
    <div class="jumbotron jumbotron-fluid">
      
      <div class="container">
        <h1 class="display-6">Listing</h1>
        <p class="lead">To sign up for an VeriBay account all you need is your email address. Once your account is set up, you can buy, sell, and enjoy all the benefits of being an VeriBay member.
    With your VeriBay account you'll be able to access My VeriBay to keep track of all your buying and selling activity, send messages to other members, save your favorite searches and sellers, and watch up to 300 items you're considering buying.
    Sign up for an VeriBay account
Signing up for an VeriBay account is quick and easy. Use the button below to get started. <br /> <br /><button class="btn btn-success">Sign Up</button></p>
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-6">Restrictions</h1>
        <p>
          <h5>If we've placed a hold, restriction, or suspension on your account, it's usually for one of the following reasons:</h5>

          <h5>Non-payment of VeriBay fees</h5> <br />
          <h5>Not reimbursing VeriBay for a refund we made to your buyer</h5> <br />
          <h5>A serious violation of one of our rules and policies</h5> <br />
          <h5>We’re unable to verify your account information</h5> <br />
          <h5>Sometimes, we may also restrict or suspend your account if the payment method on file is out of date, or has recently been declined. To remove this suspension, you'll need to update your payment method.
</h5></p>
      </div>
    </div>

  </div>
);

export default Account;
