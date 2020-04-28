import React, { Component } from 'react';
import { RecipeWrapper, Recipecontainer, RightContainer, Recipeheader,Recipeheading, Recipecard, Carousel, Carouselcontent, Recipedescription, Recipeingredients, Recipedirection } from './style';
import Rightcomponent from '../Subcomponents/Rightcomponent';

class Viewrecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: require('../Assets/images/sliderA_01.jpg'),
        }
    }
    render() {
        return (
            <RecipeWrapper>
                <Recipeheader  bgIm={this.state.img}></Recipeheader>
                <Recipecontainer>
                    <RightContainer>
                        <Recipecard>
                            <Recipeheading>
                                <h4>Chunky Beef Stew</h4>
                                <p>(2 reviews)</p>
                            </Recipeheading>
                            <Carousel bgIm={this.state.img}>
                                <p><span>  <i className="fa fa-chevron-circle-left" aria-hidden="true"></i><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></span></p>
                        </Carousel>
                        <Carouselcontent>
                            <div>
                                <span>
                                    Serves
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
                        <Recipedescription>
                        <p>This is a very basic beef stew. It’s easy, delicious and inexpensive to make. While there are hundreds of variations of this traditional recipe, it’s hard to improve on this version’s savory and comforting goodness.</p>
                        <h3>Ingredients</h3>
                        <Recipeingredients>
                            <li></li>
                            <li> <input id="check-1" type="checkbox"/>  <label htmlFor="check-1"> 2 pounds cubed beef stew meat    </label> </li>
                            <li> <input id="check-2" type="checkbox"/>  <label htmlFor="check-2"> 3 tablespoons vegetable oil    </label> </li>
                            <li> <input id="check-3" type="checkbox"/>  <label htmlFor="check-3"> 4 cubes beef bouillon, crumbled    </label> </li>
                            <li> <input id="check-4" type="checkbox"/>  <label htmlFor="check-4"> 1 large onion, chopped    </label> </li>
                            <li> <input id="check-5" type="checkbox"/>  <label htmlFor="check-5"> 1 teaspoon dried rosemary    </label> </li>
                            <li> <input id="check-6" type="checkbox"/>  <label htmlFor="check-6"> 1/2 teaspoon ground black pepper    </label> </li>
                            <li> <input id="check-7" type="checkbox"/>  <label htmlFor="check-7"> 3 large potatoes, peeled and cubed    </label> </li>
                            <li> <input id="check-8" type="checkbox"/>  <label htmlFor="check-8"> 4 carrots, cut into 1 inch pieces    </label> </li>
                            <li> <input id="check-9" type="checkbox"/>  <label htmlFor="check-9"> 4 stalks celery, cut into 1 inch pieces    </label> </li>
                            <li></li>
                        </Recipeingredients>
                        <h3>Directions</h3>
                        <Recipedirection>
                            <ul>
                            <li>In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.</li>
                            <li>In the fat remaining in the pot, cook the onions until softened, about 5 minutes.</li>
                            <li>Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.</li>
                            <li>Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender</li>
                            </ul>
                        </Recipedirection>
                        </Recipedescription>
                        </Recipecard>
                    </RightContainer>
                    <Rightcomponent />
                </Recipecontainer>
            </RecipeWrapper>
        )
    }
}

export default Viewrecipe;