import React, { Component } from 'react';
import {Link, navigate} from '@reach/router';

class Explore extends Component{
    render(){
        return(
            <div>
                <h1>This will be the "World" view</h1>
                <Link to="/fight">Fight Another</Link>
            </div>
        )
    }
}

export default Explore