import React, { Component } from 'react';

class Player extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.firstName}</h1>
                <p>health: {this.props.health}</p>
            </div>
        )
    }
}
export default Player