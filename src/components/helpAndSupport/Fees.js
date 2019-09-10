import React from 'react';
import { Link } from 'react-router-dom'
const Fees = () => (
  <div>
    <div style={{float:'right', paddingTop:15, paddingRight:100}}>      
      <Link to="helpAndSupport"><button className="btn btn-secondary btn-outline">Back</button></Link>
    </div>
      <h1>Fees and Invoice</h1>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-6">Sellers Tax</h1>
    <p class="lead">
        <br/>
    <h4>Sellers' tax responsibilities</h4>
You are responsible for paying all fees and taxes associated with using VeriBay as an VeriBay seller. For more information on VeriBay's tax policy and your obligations, see our Tax policy and User Agreement.
Your tax-related responsibilities may include:
Paying sales tax on VeriBay sales
Paying income tax on VeriBay sales
Informing overseas buyers about import charges
<h4>Charging sales tax on VeriBay sales</h4>
If you're required to charge sales tax, you can set up a tax table and apply it to your listings. We'll then add the tax to the buyer's total at checkout. You're responsible for paying the sales tax to the appropriate authority.
Contact a tax professional to determine whether you need to charge sales tax on your VeriBay sales, or if you have questions about any other taxes. We can't provide tax advice or guarantee that our sales tax features meet all tax requirements.
Setting up a tax table
You can specify a sales tax rate for each US state in which you're required to charge sales tax. You can also charge tax on shipping and handling, if it's required by law.
Buyers see your tax rates on the listing page. Once they confirm their shipping address at checkout, we automatically calculate the sales tax amount and add it to their order total.

    </p>


<h4>Invoice</h4>
<p>
Your invoice summarizes all your monthly selling activity. It shows payments you've made, selling fees, discounts, any refunds or credits applied to your account during the billing cycle, and recoupment charges.

</p>
  </div>
</div>

  </div>
);

export default Fees;
