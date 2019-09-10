import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Returns from './Returns';
import Example from './Example';
import Sellers from "./Sellers";
import Account from './Account';
import Fees from './Fees';
import Buyers from './Buyers';
import Shipping from './shipping' 

const Content = () => (
    <Switch>
      <Route exact path='/' component={Example}/>
      <Route path='/returns' component={Returns}/>
      <Route path='/sellers' component={Sellers}/>
      <Route path='/accounts' component={Account}/>
      <Route path='/fees' component={Fees}/>
      <Route path='/buyers' component={Buyers}/>
      <Route path='/shipping' component={Shipping}/>
      {/* <Route path='/about' component={AboutUs}/>
      <Route path='/abc' component={Abc}/>
      <Route path='/greeting' render = {() => (
          <div>
            <h1>Hello World</h1>
          </div>)} /> */}
    </Switch>
)

export default Content;
