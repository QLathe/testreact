import React from 'react';
import './App.css';
import {Router, navigate} from '@reach/router'
import Player from  './Components/Player.js'
import Enemy from  './Components/Enemy.js'
import Fight from './Components/Fight.js';
import Explore from './Components/Explore.js';

function App() {
    return (
      <div className="App">
        <Router>
          <Fight path="/"/>
          <Explore path="/route-two"/>
        </Router>
    </div>
  );
}


export default App;
