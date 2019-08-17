import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from "react-router";
import Home from './pages/home'
import Vanilla from './pages/vanilla'
import Modded from './pages/modded'




function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/vanilla" component={Vanilla}/>
      <Route path="/modded" component={Modded}/>
    </Router>
  )
}

export default App;
