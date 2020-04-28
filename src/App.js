import React from 'react';
import './App.css';
import Maincon from './Components/Subcomponents/Maincon';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Viewrecipe from './Components/Subcomponents/Viewrecipe';
import Form from './Components/GlobalComponents/Form/Form';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"  component={Form} />
          <Route path="/Maincon"  component={Maincon} >
          </Route>
        </Switch>
      </Router>
      
      {/* <Viewrecipe /> */}
    </div>
  );
}

export default App;
