import React, { Component } from 'react';
import Player from  './Player.js'
import Enemy from  './Enemy.js'

var enemyName = "Enemy";
var playerName = "Billy";
var enemyHealth = 50;
var playerHealth = 100;
var playerdmg = 10;
var enemydmg = 5;
class Background extends Component{
    constructor(props){
        super(props)
        this.state = {
            eHealth: enemyHealth,
            pHealth: playerHealth
        };
    }
    render(){
        console.log(this.props.children[0])
        return (
            <div>
                <Enemy firstName={enemyName} health={this.state.eHealth} dmg = {5}/>
                <Player firstName={playerName} health={this.state.pHealth} dmg = {10}/>
                <button onClick={ this.Rest }>Rest</button>
                <button onClick={ this.Attack }>Attack</button>
            </div>
            )
        }
    Rest = () => {
        this.setState({  pHealth: this.state.pHealth + 10})
        this.render()
    }
    Attack = () => {
        this.setState({ eHealth: this.state.eHealth - playerdmg})
        this.setState({ pHealth: this.state.pHealth - enemydmg})
    }
}

export default Background;