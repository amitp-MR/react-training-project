import React from 'react';
import { Wrapper, MainWrapper } from './style';
import Listview from '../Viewcomponents/Listview';
import Gridview from '../Viewcomponents/Gridview';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  Rightcomponent  from '../Subcomponents/Rightcomponent';
import Banner from '../Subcomponents/Banner';
import Footer from '../GlobalComponents/Footer/Footer';
import Header from '../GlobalComponents/Header/Header';


const Maincon =() => {
        return (
            <MainWrapper>
                 <Header />
                <Router>
                <Banner />
                <Wrapper>
                    <p className="Contentheading">Latest Recipes <span> 
                    <Link className="Listview" to="/"> Gridview</Link> <Link className="Gridview" to="/Listview">Listview</Link> </span>
                        
                    </p>
                    <Switch>
                        <Route path="/Gridview" component={Gridview} /> 
                        <Route path="/Listview" exact component={Listview} />
                    </Switch>
                    <Rightcomponent />
                </Wrapper>
                </Router>
                <Footer />
            </MainWrapper>
        )
}

export default Maincon;