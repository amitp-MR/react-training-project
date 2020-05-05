import React, { Component } from 'react';
import { RecipeWrapper, Recipecontainer, RightContainer, Recipeheader, Recipeheading, Recipecard, Carousel, Carouselcontent, Recipedescription, Recipeingredients, Recipedirection } from './style';
import Rightcomponent from '../Subcomponents/Rightcomponent';
import { view_recipe } from '../Data/ViewrecipeData';
import Footer from '../GlobalComponents/Footer/Footer';


class Viewrecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: require('../Assets/images/sliderA_01.jpg'),
        }
    }
    render() {
        return (
            <div>
                <RecipeWrapper>
                    <Recipeheader bgIm={this.state.img}></Recipeheader>
                    <Recipecontainer>
                        <RightContainer>



                            {
                                view_recipe.map((ite, idx) => {
                                    return (

                                        <Recipecard key={"recipe_" + ite.id}>
                                            <Recipeheading>
                                                <h4>{ite.title}</h4>
                                                <p>{ite.review}</p>
                                            </Recipeheading>

                                            {
                                                ite.Slider.map((it, idx, key) => {
                                                    console.log(idx)
                                                    return (
                                                        <div>
                                                            <Carousel bgIm={this.state.img}>
                                                                <p><span>  <i className="fa fa-chevron-circle-left" aria-hidden="true"></i><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></span></p>
                                                            </Carousel>
                                                            <Carouselcontent>
                                                                <div>
                                                                    <span>
                                                                        <p>4 people</p>
                                                                    </span>
                                                                    <span>
                                                                        Prep Time
                                    <p>30 min</p>
                                                                    </span>
                                                                    <span>
                                                                        Cooking
                                    <p>2 hours</p>
                                                                    </span>
                                                                    <span>
                                                                        Calories
                                    <p>632 kcal</p>
                                                                    </span>
                                                                </div>
                                                                <span className="printbtn"><i className="fa fa-print" aria-hidden="true"></i> print</span>
                                                            </Carouselcontent>
                                                        </div>
                                                    )
                                                })
                                            }



                                            <Recipedescription>
                                                <p>{ite.description}</p>
                                                <h3>Ingredients</h3>
                                                <Recipeingredients>
                                                    <li></li>
                                                    {
                                                        ite.Ingredients.map((ig, key) => {
                                                            return (
                                                                <li> <input name={"chkbox_" + key} id={"check_" + key} type="checkbox" />  <label htmlFor={"check_" + key}> {ig.ingred}    </label> </li>
                                                            )
                                                        })
                                                    }
                                                    <li></li>
                                                </Recipeingredients>
                                                <h3>Directions</h3>

                                                <Recipedirection>
                                                    <ul>
                                                        {
                                                            ite.des_list.map((it, id) => {
                                                                return (
                                                                    <li key={"des_list_" + id}>{it.des}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>

                                                </Recipedirection>
                                            </Recipedescription>
                                        </Recipecard>

                                    )


                                })
                            }


                        </RightContainer>
                        <Rightcomponent />
                    </Recipecontainer>
                </RecipeWrapper>
                <Footer />
            </div>
        )
    }
}

export default Viewrecipe;