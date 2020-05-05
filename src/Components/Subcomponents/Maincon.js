import React, { Component } from 'react';
import { Wrapper, MainWrapper } from './style';
import Listview from '../Viewcomponents/Listview';
import Gridview from '../Viewcomponents/Gridview';
import Rightcomponent from '../Subcomponents/Rightcomponent';
import Banner from '../Subcomponents/Banner';
import Footer from '../GlobalComponents/Footer/Footer';
import Header from '../GlobalComponents/Header/Header';


class Maincon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vadlidState: false,
        }
        this.componentHandler = this.componentHandler.bind(this);
    }
    componentHandler = (ele) => {
        this.setState({ vadlidState: ele, });
    }

    render() {
        return (
            <MainWrapper>
                <Header />
                <Banner />
                <Wrapper>
                    <p className="Contentheading">Latest Recipes
                        <span className="viewComponents">
                            <span style={this.state.color}
                                onClick={() => this.componentHandler(false)}
                                className="Listview"> Gridview</span>
                            <span style={this.state.color}
                                onClick={() => this.componentHandler(true)}
                                className="Gridview" >Listview</span>
                        </span>
                    </p>
                    {this.state.vadlidState ? <Gridview /> : <Listview />}
                    <Rightcomponent />
                </Wrapper>
                <Footer />
            </MainWrapper>
        )
    }

}


export default Maincon;