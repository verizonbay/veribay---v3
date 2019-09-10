import React from 'react'

import Joi from 'joi-browser'
import Form from '../common/Form';
import { fetchUsers } from '../Actions';

import { connect } from 'react-redux';
class Login extends Form {

    componentDidMount() {
        this.props.fetchUsers();
    }

    state = {
        data: { email: "", password: "" },
        errors: {},
    }

    schema = {
        email: Joi.string().required().label("Email Id"),
        password: Joi.string().required().label("Password")
    }
    validate = () => {

        const options = { abortEarly: false }
        const { error } = Joi.validate(
            {
                email: this.state.email,
                password: this.state.password
            }, this.schema, options
        )

        if (!error) return null;

        const errors = {}
        for (let item of error.details)
            errors[item.path[0]] = item.message

        console.log(errors)
        return errors

    }

    doSubmit = () => {
        console.log(this.state.email, this.state.password)
        console.log(this.props.loginvalidation)

        this.props.loginvalidation.map(
            data => {
                if (this.state.email === data.email && this.state.password === data.password) {
                    console.log(data.profilephoto)
                    localStorage.setItem("photo", data.profilephoto)
                    localStorage.setItem("userData", this.state.email + "-" + this.state.password)
                    console.log("Logged in with " + this.state.email + " " + this.state.password)
                    localStorage.setItem("wishList",  true)
                   window.location = "/"
                }
                return ""
            }
        )


    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <center><h1>Login</h1></center>
                <form onSubmit={this.submitLoginForm}>
                    {this.renderInput({ name: "email", label: "Email ID", labelName: "Email-ID", type: "email", placeholder: "Enter Email ID" })}
                    {this.renderInput({ name: "password", label: "Password", labelName: "Password", type: "password", placeholder: "Password" })}
                    <center>{this.renderButton("Login")}</center>
                </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                
                </div>

        )
    }
}

const mapStateToProps = state => ({ loginvalidation: state.userdatas });
export default connect(mapStateToProps, { fetchUsers })(Login);