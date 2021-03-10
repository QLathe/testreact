import React, { Component } from 'react';

class Player extends Component{
    constructor(props){
        super(props)
        this.state = {
            health: this.props.health
        };
    }
    render(){
        return (
            <div>
                <h1>{this.props.firstName}</h1>
                <p>health: {this.state.health}</p>
                <button onClick={ this.Rest}>Rest</button>
            </div>
        )
    }
    Rest = () => {
        if(this.state.health < 150){
            this.setState({health: this.state.health + 10})
        }
        else{
            console.log("Billy is fully rested")
        }
    }
}

export default Player