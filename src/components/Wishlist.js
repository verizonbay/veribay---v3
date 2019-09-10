import React from 'react';
import axios from 'axios';
import { fetchWishList } from '../Actions';

import { connect } from 'react-redux';

class Wishlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wish: true,
            wishes: '',
        }


    }

    

    componentDidMount() {
        this.props.fetchWishList();
    }


    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            wish: false
        })
    }

    doSubmit = () => {

        this.setState({
            wish: true,
        })
        if (this.state.wishes.trim().length > 0) {

            axios.post("http://192.168.20.121:9088/addWishListItem",
                {
                    productName: this.state.wishes,
                    username: localStorage.getItem("userData").split('-')[0].split('@')[0]
                }
            )
                .then(response => console.log(response))
                .catch(error => console.log(error))
                window.location = '/';
        }
        this.getWishList()
    }

   


    render() {
      

        let w
        if (this.props.wishlist.length > 0) {
            w = this.props.wishlist.map(
                (data, id) =>
                    <tr key={id}>
                        <td>{data.username}</td>
                        <td>:</td>
                        <td>{data.productName}</td>
                    </tr>
            )
        } else {
            w = <div></div>
        }

        return (
          <div>
            <div className="card">
                {console.log(this.props.wishlist)}

                {this.state.wish ? <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>Add to wishlist</button> :
                    <div>
                        <React.Fragment>
                            <label>Enter item</label> <br />
                            <input type="text" name="wishes" onChange={this.handleChange} /><br /><br />
                            <button className="btn btn-outline-primary" type="submit" onClick={this.doSubmit}>Add</button>


                        </React.Fragment>
                    </div>

                }
                {(this.props.wishlist.length > 0 && this.state.wish) ?
                    <table>
                        <tbody>
                            <tr>
                                <th>Username</th>
                                <td></td>
                                <th>Wish</th>
                            </tr>

                            {w}
                        </tbody>
                    </table>
                    :
                    <div></div>}
                  

                  </div>
           
            
            </div>
        )
    }
}

const mapStateToProps = state => ({ wishlist: state.wishdatas });
export default connect(mapStateToProps, { fetchWishList })(Wishlist);