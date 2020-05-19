import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from './Components/GlobalComponents/Form/Form';
import Shop from './Components/Subcomponents/Shop';
import Maincon from './Components/Subcomponents/Maincon';
import Viewrecipe from './Components/Subcomponents/Viewrecipe';
import Submitrecipe from './Components/Subcomponents/Submitrecipe';
import Header from './Components/GlobalComponents/Header/Header';
import Footer from './Components/GlobalComponents/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/"  component={Form} />
          <Route exact path="/Home"  component={Home} /> */}
          <Route exact path="/"><Form /></Route>
          <Route exact path="/"><Shop /></Route>
          <Route exact path="/"><Form /></Route>
          <Route exact path="/"><Shop /></Route>
          <Route exact path="/"><Form /></Route>
          <Route exact path="/"><Shop /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
