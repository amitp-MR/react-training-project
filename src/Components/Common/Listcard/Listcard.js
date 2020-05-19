import React from 'react'
import { RecipeContainer, ImgContainer, TextContainer } from '../StyleComponent/style';

const Listcard = (props) => {
    // const stars = [];
    // for (let i = 0; i < props.Listdata.conitems.stars; i++) {
    //     stars.push(<i key={i} className="contentstars fa fa-star" aria-hidden="true"></i>);
    // };
    return (
        <RecipeContainer  className="recipecontainer">
            <ImgContainer>
                <span to="/Viewrecipe" onClick={this.changeEve.bind(this, "view_")} className="viewrecipe" ><a>VIEW RECIPE</a></span>
                <img src={props.Listdata.img} alt={"recipeImg_"} />
            </ImgContainer>
            <TextContainer>
                {/* <a>{props.Listdata.title}</a> */}
                <div className="contentrating">
                    <span></span><span></span><span> {props.Listdata.time}</span>
                </div>
            </TextContainer>
        </RecipeContainer>
    )
}

export default Listcard
