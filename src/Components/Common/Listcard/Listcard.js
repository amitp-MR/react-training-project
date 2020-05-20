import React from 'react'
import { RecipeContainer, ImgContainer, TextContainer } from '../StyleComponent/style';

const Listcard = (props) => {
    const stars = [];
    for (let i = 0; i < props.listdata.stars; i++) {
        stars.push(<i key={i} className="contentstars fa fa-star" aria-hidden="true"></i>);
    };
    return (
        <RecipeContainer  className="recipecontainer">
            <ImgContainer>
                <span to="/Viewrecipe" className="viewrecipe" ><a>VIEW RECIPE</a></span>
                <img src={props.listdata.img} alt={"recipeImg_"} />
            </ImgContainer>
            <TextContainer>
                <a>{props.listdata.title}</a>
                <div className="contentrating">
                    <span></span><span></span><span> {props.listdata.time}</span>
                </div>
            </TextContainer>
        </RecipeContainer>
    )
}

export default Listcard
