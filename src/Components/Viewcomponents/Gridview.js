import React, { Component } from 'react';
import { GridimgContainer, Gridgallery, GridContainer, GridContentContainer } from '../Viewcomponents/Viewcomponentstyle';
import { cardgallery_data } from '../Data';


class Listview extends Component {
    render() {
        return (
            <Gridgallery>
                {
                    cardgallery_data.map((conitems, idx) => {
                        return (
                            <GridContainer key={"key_" + idx} className="recipecontainer">
                                <GridimgContainer>
                                    <span className="viewrecipe"><a href="#">VIEW RECIPE</a></span>
                                    <img src={conitems.img} />
                                </GridimgContainer>
                                <GridContentContainer>
                                    <div>
                                        <h3><a href="">{conitems.title}</a></h3>
                                        <p>{conitems.recipeContent}</p>
                                    </div>
                                    <p><span>
                                        {conitems.stars}
                                       </span><span>{conitems.time}</span><span>{conitems.author}}</span></p>
                                </GridContentContainer>
                            </GridContainer>
                        )
                    })
                }
            </Gridgallery>
        );
    }
}


export default Listview;