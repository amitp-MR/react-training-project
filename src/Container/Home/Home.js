import React, { Component } from 'react';
import { CardWrapper, MainWrapper } from '../../Components/Common/StyleComponent/style';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Banner from '../../Components/Banner/Banner';
import Header from '../../Components/Common/Header/Header';
import Footer from '../../Components/Common/Footer/Footer';
import RecipeCardGridContainer from '../../Components/RecipeCardGridContainer/RecipeCardGridContainer';
import RecipeCardListContainer from '../../Components/RecipeCardListContainer/RecipeCardListContainer';
class Home extends Component {
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
                <Banner />
                <CardWrapper>
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
                    
                    {this.state.vadlidState ? <RecipeCardGridContainer /> : <RecipeCardListContainer />}
                    <Sidebar />
                </CardWrapper>
            </MainWrapper>
        )
    }

}


export default Home;