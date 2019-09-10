import React from 'react'
import Joi from 'joi-browser'
import axios from 'axios'

import Form from '../common/Form';

export default class Register extends Form {

    state = {
        data: {
            username: "",
            password: "",
            email: "",
            address: "",
            city: "",
            contact:"",
           profile_photo: null
        },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label("Username"),
        email: Joi.string().required().label("Email Id"),
        password: Joi.string().required().label("Password"),
        address: Joi.string().required().label("Address"),
        city: Joi.string().required().label("City"),
        contact: Joi.string().regex(/^[0-9]{10}$/).required().label("Contact Number"),
        profile_photo: Joi.required().label("Profile Photo")
    }


    validate = () => {

        const options = { abortEarly: false }
        const { error } = Joi.validate(
            {
                email: this.state.email,
                password: this.state.password,
                city: this.state.city,
                address: this.state.address,
                username: this.state.username,
                contact: this.state.contact,
                profile_photo: this.state.profile_photo
            }, this.schema, options
        )

        if (!error) return null;

        const errors = {}
        for (let item of error.details)
            errors[item.path[0]] = item.message

        console.log(errors)
        return errors

    }

    handleFileChange = (event) => {
        this.setState({
            profile_photo: event.target.files[0]
        })
    }


    doSubmit = () => {
        
        console.log("After Register Button \n")
       
        let userData = new FormData()

        userData.append( "username",this.state.username)
        userData.append("email", this.state.email)
        userData.append( "password",this.state.password)
        userData.append("address",this.state.address)
        userData.append("city",this.state.city)
        userData.append("contact",this.state.contact)
        userData.append("image",this.state.profile_photo)

        

        axios.post("http://192.168.20.121:8098/registerUser", userData)
        .then(response => console.log(response))
        .catch(error => console.log(error))


        alert("Registered Successfully")
        window.location = "/"
        
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                        <center><h1>Register</h1></center>
                    <form onSubmit={this.submitLoginForm}>
                        {this.renderInput({ name: "username", label: "Username", labelName: "Username", type: "text", placeholder: "User Name" })}
                        {this.renderInput({ name: "email", label: "Email ID", labelName: "Email-ID", type: "email", placeholder: "Email ID" })}
                        {this.renderInput({ name: "password", label: "Password", labelName: "Password", type: "password", placeholder: "Password" })}
                        {this.renderInput({ name: "address", label: "Address", labelName: "Address", type: "text", placeholder: "Address" })}
                        {this.renderInput({ name: "city", label: "City", labelName: "City", type: "text", placeholder: "City" })}
                        {this.renderInput({ name: "contact", label: "Contact Number", labelName: "Contact Number", type: "text", placeholder: "Contact Number" })}
                        
                        <input type = "file" name="profile_photo" placeholder= "Profile Photo"  onChange = {this.handleFileChange} />
                        <br/>    <br/>                
                        <center>{this.renderButton("Register")}</center>
                    </form>

                        </div>
                        <div className="col-md-4"></div>
                    </div>
                   
                </div>
            </React.Fragment>
        )
    }
}