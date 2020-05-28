import React, { Component } from 'react';
import { RecipeWrapper, Recipecontainer, RightContainer, Recipeheader, Recipeheading, Recipecard, Carousel, Carouselcontent, Recipedescription, Recipeingredients, Recipedirection } from '../Common/StyleComponent/style';
import Rightcomponent from '../Sidebar/Sidebar';
import { view_recipe } from '../../Data/ViewrecipeData';
import Hoc from '../../Container/Hoc/Hoc';


class Viewrecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            img: require('../../Assets/images/sliderA_01.jpg'),
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

                                        <Recipecard key={"recipe_" + idx}>
                                            <Recipeheading>
                                                <h4>{ite.title}</h4>
                                                <p>{ite.review}</p>
                                            </Recipeheading>

                                            {
                                                ite.Slider.map((i, idx) => {
                                                    console.log(idx);
                                                    return (
                                                        <div key={'Slider' + idx}>
                                                            <Carousel bgIm={this.state.img}>
                                                                <p><span>  <i className="fa fa-chevron-circle-left" aria-hidden="true"></i><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></span></p>
                                                            </Carousel>
                                                            <Carouselcontent>
                                                                <div>
                                                                    <span>
                                                                    <p>{i.Serves}</p>
                                                                    </span>
                                                                    <span>
                                                                        {i.Prep}
                                                                        <p>{i.PrepTime}</p>
                                                                    </span>
                                                                    <span>
                                                                        {i.task}
                                                                        <p>{i.cookingtime}</p>
                                                                    </span>
                                                                    <span>
                                                                        {i.unit}
                                                                        <p>{i.value}</p>
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
                                                                <li key={'hoc' + key}> <input name={"chkbox_" + key} id={"check_" + key} type="checkbox" />  <label htmlFor={"check_" + key}> {ig.ingred}    </label> </li>
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
            </div>
        )
    }
}

export default Hoc(Viewrecipe);