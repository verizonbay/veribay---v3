import React from 'react';

import { connect } from 'react-redux';
import axios from 'axios';


class Bidding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bidlist: [],
            bid: '',
            minbid: this.props.minbid,
            maxbid: this.props.minbid,

        }
    }

    componentDidMount = () => {

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.bid, this.state.bidlist, this.props.selectedProduct, this.state.maxbid)
        let product = this.props.selectedProduct
        console.log(this.props.all_bids)
        if (this.state.maxbid < this.state.bid) {
            product.all_bids = [...product.all_bids, Number(this.state.bid).valueOf()]
            product.product_minimumbid = Number(this.state.bid).valueOf()

            product.bidders_name = [...product.bidders_name, localStorage.getItem("userData").split('-')[0].split('@')[0]]
            axios.put("http://192.168.20.121:9098/saveProduct", product)
                .then(res => this.setState({ displayProduct: res.data }))
                .catch(res => console.log(res))

        }
        console.log(product)
        // if (this.state.bid > this.state.maxbid) {
        //     this.setState({
        //         maxbid: this.state.bid,
        //         bidlist: [...this.state.bidlist, this.state.bid],
        //         bid: ''
        //     })
        // }
    }

    render() {
        // let bidding = this.state.bidlist.map(
        //     (bidd, id) => 
        //     <div key= {id}>
        //         {bidd.maxbid}
        //     </div>

        // )


        let bidlist = this.props.selectedProduct.all_bids.slice(1)
        let bidData = bidlist.map(
            (data, id) =>

                <tr key={id}>
                    <td>{this.props.selectedProduct.bidders_name[id + 1]}</td>
                    <td>{data}</td>
                </tr>

        )


        return (
            <React.Fragment>
                {console.log("here1", this.props.selectedProduct.all_bids)}

                <div className="row">
                    <div className="col-md-7">
                        <strong>Starting bid:</strong>&nbsp;&nbsp;&nbsp;&nbsp;Rs.{this.props.minbid}<br />

                        <input type="text" name="bid" style={{ marginLeft: '105px' }} onChange={this.handleChange} />&nbsp;

                <button className="btn btn-outline-primary" onClick={this.handleSubmit}>Place bid</button><br />


                        <h6 style={{ marginLeft: '105px' }}>Enter Rs.{this.state.maxbid} or more</h6><br /><br />
                    </div>
                    <div className="col-md-4">
                        {(this.props.selectedProduct.all_bids.length > 1) ?
                            <div className="card" style={{ float: "right-top" }}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>UserName</th>
                                            <th>Bid </th>
                                        </tr>

                                        {bidData}

                                    </tbody>
                                </table>
                                {this.props.selectedProduct.all_bids && console.log(this.props.selectedProduct.all_bids)}
                            </div>
                            :
                            <div>
                                NO Bids Till now !!!
                            </div>
                        }
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ selectedProduct: state.selectedProduct });
export default connect(mapStateToProps)(Bidding);