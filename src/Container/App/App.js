import React from 'react';
import '../App/App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from '../../Components/Common/Form/Form';
import Home from '../../Container/Home/Home'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"  component={Form} />
          <Route path="/Home"  component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
