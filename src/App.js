import React from 'react';
import './App.css';
import Maincon from './Components/Subcomponents/Maincon';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Viewrecipe from './Components/Subcomponents/Viewrecipe';
import Form from './Components/GlobalComponents/Form/Form';
import Submitrecipe from './Components/Subcomponents/Submitrecipe';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"  component={Form} />
          <Route exact path="/Maincon"  component={Maincon} />
          <Route exact path="/Viewrecipe"  component={Viewrecipe} />
          <Route exact path="/Submitrecipe" component={Submitrecipe} />
        </Switch>
      </Router>
      
      {/* <Viewrecipe /> */}
    </div>
  );
}

export default App;
