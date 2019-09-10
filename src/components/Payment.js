import React from 'react'
import axios from 'axios';

export default class Payment extends React.Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         showDelivery:false
    //     }
    // }

    // goToDelivery = () => {
    //     this.setState({
    //         showDelivery: true
    //     })
    // }

    // render() {

    //     let payment = <div>Payment
    //                         <button className="btn btn-outline-primary" onClick={this.goToDelivery}>PAY</button>
    //                    </div>

    //     return (
    //         <div>
    //              {(this.state.showDelivery)?<Delivery />:payment}
    //         </div>
    //     )
    // }


    constructor() {
        super()
        this.state = {
            cards: [],
            addClicked: true,
            ex_mm: 0,
            ex_yy: 0,
            card_no: "",
            cvv: 0,
            name_on_card: ""

        }
    }

    componentDidMount() {
        axios.get("http://localhost:8081/api/details")
            .then(response => {
                this.setState({ cards: response.data })
            })
            .catch(error => console.log(error))
    }
    newCard = () => {
        this.setState(
            { addClicked: !this.state.addClicked }

        )
    }
    addCard = () => {
        axios.post("http://localhost:8081/api/details", {});
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChange1 = (e) => {
        this.setState({
            card_no: this.state.card_no + e.target.value

        })

    }

    render() {
        return (
            <div className="container">
                {this.state.addClicked ?
                    <div className="panel-heading">
                        <div className="row" >
                            <h3 className="text-center">Payment Details</h3>< br />
                        </div>
                        <div>
                            <img className="img-responsive cc-img" style={{ width: '405px' }} 
                              alt = "../assets/profilePic2.jpg"
                            src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png" />
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <button className="btn btn-warning btn-lg btn-block" onClick={this.newCard} >Add Card</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="panel-body" >
                            <form>
                                <div className="row">
                                    <div >
                                        <div>
                                            <h3 className="text-center">Payment Details</h3>< br />
                                        </div>
                                        <div>
                                            <img className="img-responsive cc-img" style={{ width: '405px' }} 
                                              alt = "../assets/profilePic2.jpg"
                                            src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png" />
                                        </div>

                                        <div >
                                            <label>NAME ON CARD</label>
                                            <input type="text" style={{ width: '405px' }} className="form-control" placeholder="Name on Card" name="name_on_card" />
                                        </div>

                                        <div>
                                            <label>CARD NUMBER</label>
                                            <table>
                                                <tbody>

                                                    <tr>
                                                        <td>
                                                            <input type="text" style={{ width: '100px' }} className="form-control" placeholder="CARD NO" name="first" onChange={this.handleChange1} />&nbsp;&nbsp;
                                                    </td>
                                                        <td>
                                                            <input type="text" style={{ width: '100px' }} className="form-control" placeholder="CARD NO" name="second" onChange={this.handleChange1} />&nbsp;&nbsp;
                                                    </td>
                                                        <td>
                                                            <input type="text" style={{ width: '100px' }} className="form-control" placeholder="CARD NO" name="third" onChange={this.handleChange1} />&nbsp;&nbsp;
                                                    </td>
                                                        <td>
                                                            <input type="text" style={{ width: '100px' }} className="form-control" placeholder="CARD NO" name="fourth" onChange={this.handleChange1} />&nbsp;&nbsp;

                                                    </td>
                                                    </tr>
                                                    <tr>
                                                        <td> <input type="text" style={{ width: '100px' }} className="form-control" placeholder="MM" name="expiry_month" onChange={this.handleChange} />&nbsp;&nbsp;</td>
                                                        <td> <input type="text" style={{ width: '100px' }} className="form-control" placeholder="YY" name="expiry_year" onChange={this.handleChange} />&nbsp;&nbsp;</td>
                                                        <td></td>
                                                        <td> <input type="text" style={{ width: '100px' }} className="form-control" placeholder="CVV" name="cvv" onChange={this.handleChange} />&nbsp;&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="panel-footer">
                            <div class="row">
                                <div class="col-xs-12">
                                    <button class="btn btn-warning btn-lg btn-block" >Done</button>
                                    {console.log(this.state.card_no)}

                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

        )
    }

}