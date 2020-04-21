import React, { Component } from 'react';
import { cardgallery_data } from '../Data';
import { Cardgallery, RecipeContainer, ImgContainer, TextContainer } from '../Viewcomponents/Viewcomponentstyle';


class Listview extends Component{
    render(){
        return(
            <Cardgallery>
            {
                cardgallery_data.map((conitems, idx) => {
                    return (
                        <RecipeContainer key={"key_"+idx} className="recipecontainer">
                            <ImgContainer>
                                <span className="viewrecipe" id={"view_" + idx}><a href="#">VIEW RECIPE</a></span>
                                <img src={conitems.img} alt={"recipeImg_" + idx} />
                            </ImgContainer>
                            <TextContainer>
                                <a>{conitems.title}</a>
                                <p></p>
                                <div>
                                    <span></span><span> {conitems.time}</span>
                                </div>
                            </TextContainer>
                        </RecipeContainer>
                    )
                })
            }
        </Cardgallery>
        );
    }
}


export default Listview;