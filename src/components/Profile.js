import React from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends React.Component {
    
    

    render() {
        return (
            <React.Fragment>
                <div class="card" Style="width:17rem;" >
                    <img src="https://iisy.fi/wp-content/uploads/2018/08/user-profile-male-logo.jpg" class="card-img-top" alt="..." />
                    <a href="ww" class="card-link">Edit</a>
                    <h5 class="card-title" Style="text-align:center;">User 1</h5>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action">
                            <button className="btn btn-primary-outline">My Orders<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                        </li >
                        <li class="list-group-item list-group-item-action">
                            <button className="btn btn-primary-outline">WishList<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                        </li>
                        <li class="list-group-item list-group-item-action">
                            <button className="btn btn-primary-outline">Manage seller account<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                        </li>
                        <li class="list-group-item list-group-item-action">
                            <Link to="/helpAndSupport">
                                <button className="btn btn-primary-outline">Help and Support<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                            </Link>
                        </li>
                    </ul>

                </div>

            </React.Fragment>
        )
    }
}