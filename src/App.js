import React from 'react';
import './App.css';
import {Router, navigate} from '@reach/router'
import Player from  './Components/Player.js'
import Enemy from  './Components/Enemy.js'
import Fight from './Components/Fight.js';
import Explore from './Components/Explore.js';
import HomePage from './views/HomePage'
function App() {
    return (
      <div className="App">
        <Router>
          <HomePage path="/"/>
          <Fight path="/fight"/>
          <Explore path="/route-two"/>
        </Router>
    </div>
  );
}


export default App;
