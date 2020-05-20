import React from 'react';
import '../App/App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from '../../Components/Common/Form/Form';
import Home from '../../Container/Home/Home'; 
import Submitrecipe from '../../Components/Submitrecipe/Submitrecipe';
import Viewrecipe from '../../Components/Viewrecipe/Viewrecipe';
import Shop from '../../Components/Shop/Shop';
import Signin from '../../Components/Common/Form/Signin';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"  component={Form} />
          <Route path="/Home"  component={Home} />
          <Route path="/Shop" component={Shop} />
          <Route path="/Viewrecipe" component={Viewrecipe} />
          <Route path="/Submitrecipe" component={Submitrecipe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
