import React, { Component } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home';
import Recipes from './Pages/Recipes';
import SingleRecipe from './Pages/SingleRecipe';
import Default from './Pages/Default';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
export default class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipes/:id" component={SingleRecipe} />
            <Route component={Default}/>

        </Switch>
      </main>
      </Router>
      
    )
  }
}
