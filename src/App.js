import React from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'

import NotFound from './components/NotFound';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Profile from './components/Profile';
import Payment from './components/Payment';
import Example from './components/helpAndSupport/Example';
import Returns from './components/helpAndSupport/Returns';
import Sellers from './components/helpAndSupport/Sellers';
import Account from './components/helpAndSupport/Account';
import Fees from './components/helpAndSupport/Fees';
import Buyers from './components/helpAndSupport/Buyers';
import Shipping from './components/helpAndSupport/shipping';
import axios from 'axios';

export default class App extends React.Component {

    state = {}

    componentDidMount() {
        axios.get("http://192.168.20.121:8096/getLogos")
            .then(response => localStorage.setItem("logo",response.data[0].logo))
            .catch(error => console.log(error))
        this.setState({
            userData: localStorage.getItem("userData")
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar userData={this.state.userData} />
                <main className="container-fluid">
                    <Switch>
                        {/* <div className="container"> */}
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        {/* </div> */}
                        <Route path="/home" component={Home} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/notfound" component={NotFound} />
                        <Route path="/payment" component={Payment} />

                    

                        <Route exact path='/helpAndSupport' component={Example} />
                        <Route path='/returns' component={Returns} />
                        <Route path='/sellers' component={Sellers} />
                        <Route path='/accounts' component={Account} />
                        <Route path='/fees' component={Fees} />
                        <Route path='/buyers' component={Buyers} />
                        <Route path='/shipping' component={Shipping} />


                        <Redirect from="/" exact to="/home" />
                        <Redirect to="/notfound" />
                    </Switch>
                </main>
            </React.Fragment>
        )
    }
}
