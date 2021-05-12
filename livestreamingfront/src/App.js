import React from "react"
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Playvideo from './Playvideo'
import{BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import axios from "axios"

function App(props) {
  return (
    <div className="App">
     <div className="container-fluid">
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Playvideo/:vname" exact component={Playvideo} />
          </Switch>  
      </Router>  
     </div>     
    </div>
  );
}

export default App
