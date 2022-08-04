import logo from './logo.svg';
import './App.css';
import {Weather} from "./component/weather.js"
import {NavBar} from "./component/navBar.js"
import {Home} from "./component/home.js"
import {Routes,Route} from "react-router-dom"
import {Favourites} from "./component/favourites.js"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favourites" element={<Favourites />}/>
      </Routes>
    </div>
  );
}

export default App;

