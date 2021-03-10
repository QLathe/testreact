import logo from './logo.svg';
import './App.css';
import Player from  './Components/Player.js'

function App() {
  return (
    <div className="App">
      <Player firstName={"Enemy"} health={50} dmg = {5}/>
      <Player firstName={"Billy"} health={100} dmg = {10}/>
    </div>
  );
}

export default App;
