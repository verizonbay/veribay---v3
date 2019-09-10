import React from 'react' 

export default class Logout extends React.Component {
    
    componentDidMount(){
        localStorage.removeItem("userData")
        localStorage.removeItem("wishList")
        localStorage.removeItem("photo")
        localStorage.removeItem("productSelected")
        window.location = "/"
    }

    render(){
        return null
    }
}