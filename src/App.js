import logo from './logo.svg';
import './App.css';
import Player from  './Components/Player.js'
import Enemy from  './Components/Enemy.js'
import Background from './Components/Background';

function App() {
  return (
    <div className="App">
      <Background>
        <Enemy firstName={"Enemy"} health={50} dmg = {5}/>
        <Player firstName={"Billy"} health={100} dmg = {10}/>
      </Background>
    </div>
  );
}

export default App;
