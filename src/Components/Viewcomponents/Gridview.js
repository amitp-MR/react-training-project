import React, { Component } from 'react';
import { GridimgContainer, Gridgallery, GridContainer, GridContentContainer } from '../Viewcomponents/Viewcomponentstyle';
import { cardgallery_data } from '../Data';
import { Link } from 'react-router-dom';


class Gridview extends Component {
    render() {
        return (
            <Gridgallery>
                {
                    cardgallery_data.map((conitems, idx) => {
                        const stars = [];
                    for(let i=0; i<conitems.stars; i++){
                        stars.push(<i key={i} className="contentstars fa fa-star" aria-hidden="true"></i>);  
                    };
                        return (
                            <GridContainer key={"key_" + idx} className="recipecontainer">
                                <GridimgContainer>
                                    <Link to="/Viewrecipe" className="viewrecipe">VIEW RECIPE</Link>
                                    <img src={conitems.img} />
                                </GridimgContainer>
                                <GridContentContainer>
                                    <div>
                                        <h3>{conitems.title}</h3>
                                        <p>{conitems.recipeContent}</p>
                                    </div>
                                    <p><span>
                                        {stars}
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


export default Gridview;