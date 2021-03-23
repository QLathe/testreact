import React from 'react';
import background from "./Background.png"
import {Link} from '@reach/router'
const HomePage = () => {
    return(
        <div style={{
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundImage: `url(${background})`
        }}>
            <h1 style={{margin: 0}}>Kill the King</h1>
            <div style={{marginTop: 30+"em"}}>
                <Link to="/route-two">Start Journey</Link>
            </div>
        </div>
    )
}

export default HomePage