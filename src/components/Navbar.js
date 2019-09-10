import React from 'react'


import { Link, NavLink } from 'react-router-dom'




const Navbar = ({ userData }) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <Link className="navbar-brand" to="/">
                        <img   style={{ height: 80 }}
                        src={`data:image/png;base64,${localStorage.getItem("logo")}`} />                      
                        
                </Link>
                <button
                    className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {!userData &&
                            <React.Fragment>
                                <NavLink className="nav-link" to="/login"><button className="btn btn-lg" style={{ color: "white" }}>Login <i className="fa fa-sign-in"></i></button></NavLink>

                                <NavLink className="nav-link" to="/register"><button className="btn btn-lg" style={{ color: "white" }}>Register <i className="fa fa-registered"></i></button></NavLink>
                            </React.Fragment>
                        }
                        {userData &&
                            <React.Fragment>

                                <NavLink className="nav-link" to="/profile">
                                    <img style={{ width: '50px', borderRadius: '50%', height: '50px' }}
                                        alt="../assets/profilePic2.jpg"
                                        src={`data:image/png;base64,${localStorage.getItem("photo")}`} />
                                    &nbsp;&nbsp;
                                    <b>{localStorage.getItem("userData").split('-')[0].split('@')[0]}</b>
                                </NavLink>

                                <NavLink className="nav-link" to="/helpAndSupport">
                                    <button className="btn btn-md" style={{ color: "white",paddingTop:'7%'}}>Help and Support</button>
                                </NavLink>

                                <NavLink className="nav-link" to="/logout">
                                    <button className="btn btn-md" style={{ color: "white", paddingTop:'10%'}}>Logout <i className="fa fa-sign-out"></i></button>
                                </NavLink>
                            </React.Fragment>
                        }
                    </ul>
                </div>
            </nav >
        </React.Fragment>
    )
}

export default Navbar;