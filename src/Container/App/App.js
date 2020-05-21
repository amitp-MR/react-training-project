import React from 'react';
import '../App/App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Form from '../../Components/Common/Form/Form';
import Home from '../../Container/Home/Home'; 
import Submitrecipe from '../../Components/Submitrecipe/Submitrecipe';
import Viewrecipe from '../../Components/Viewrecipe/Viewrecipe';
import Shop from '../../Components/Shop/Shop';
import Signin from '../../Components/Common/Form/Signin';
import Productdetail from '../../Components/Productdetail/Productdetail';
import Header from '../../Components/Common/Header/Header';
import Footer from '../../Components/Common/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"  component={Form} />

          <Route path="/Home" component={Home} >
          <Header />
            <Home />
          <Footer />
          </Route>
          <Route path="/Shop" component={Shop} >
          <Header />
            <Shop />
          <Footer />
          </Route>
          <Route path="/Viewrecipe" component={Viewrecipe} >
          <Header />
            <Viewrecipe />
          <Footer />
          </Route>
          <Route path="/Submitrecipe" component={Submitrecipe} >
          <Header />
            <Submitrecipe />
          <Footer />
          </Route>
          <Route path="/Productdetail" component={Productdetail} >
          <Header />
            <Productdetail />
          <Footer />
          </Route>          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
