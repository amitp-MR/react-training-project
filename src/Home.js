

import React from 'react';
import Maincon from './Components/Subcomponents/Maincon';
import Viewrecipe from './Components/Subcomponents/Viewrecipe';
import Submitrecipe from './Components/Subcomponents/Submitrecipe';
import Shop from './Components/Subcomponents/Shop';
import Header from './Components/GlobalComponents/Header/Header';
import Footer from './Components/GlobalComponents/Footer/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <Header {...props}/>
            <Router>
                <Switch>
                    <Route  path="" component={Maincon}/>
                </Switch>
            </Router>
        </div>
    );
}

export default Home;