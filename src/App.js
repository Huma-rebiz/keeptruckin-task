import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';



function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
