import React from 'react';
import '../App/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from '../../Components/Common/Form/Form';
import Home from '../../Container/Home/Home';
import Submitrecipe from '../../Components/Submitrecipe/Submitrecipe';
import Viewrecipe from '../../Components/Viewrecipe/Viewrecipe';
import Shop from '../../Components/Shop/Shop';
import Productdetail from '../../Components/Productdetail/Productdetail';
import BrowseRecipe from '../../Components/BrowseRecipe/BrowseRecipe';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/home" component={Home} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Viewrecipe" component={Viewrecipe} />
          <Route path="/Submitrecipe" component={Submitrecipe} />
          <Route path="/Productdetail" component={Productdetail} />
          <Route path="/BrowseRecipe" component={BrowseRecipe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
