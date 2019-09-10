import React from 'react'
import { Link } from 'react-router-dom'

export default class Delivery extends React.Component {

    
    render(){
        return(
            <div>
                Will be Deleivered Soon
                <Link to="/"><button className="btn btn-outline-primary" >Go To Home</button></Link>
            </div>
        )
    }
}