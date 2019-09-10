import React, { Component } from 'react';
export default class Help extends Component
{
    constructor()
    {
        super();

    }
    render(){
        return(
            <div>
                <h1> Hi how can i help you Today?</h1>
                <input type="text"/>
                <button type="submit">Submit</button>
            </div>
        );
    }
}