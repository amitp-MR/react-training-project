import React, { Component } from 'react';
import { cardgallery_data } from '../Data';
import { Cardgallery, RecipeContainer, ImgContainer, TextContainer } from '../Viewcomponents/Viewcomponentstyle';

class Listview extends Component{

    changeEve = (value,e) =>{
        e.preventDefault();
        console.log(value)
    }

    render(){
        return(
            <Cardgallery>
            {
                cardgallery_data.map((conitems, idx) => {
                    const stars = [];
                    for(let i=0; i<conitems.stars; i++){
                        stars.push(<i key={i} className="contentstars fa fa-star" aria-hidden="true"></i>);  
                    };
                    return (
                        <RecipeContainer key={"key_"+idx} className="recipecontainer">
                            <ImgContainer>
                                <span to="/Viewrecipe" onClick={this.changeEve.bind(this, "view_" + idx)} className="viewrecipe" id={"view_" + idx}><a>VIEW RECIPE</a></span>
                                <img src={conitems.img} alt={"recipeImg_" + idx} />
                            </ImgContainer>
                            <TextContainer>
                                <a>{conitems.title}</a>
                                <div className="contentrating">
                                <span>{stars}</span><span></span><span> {conitems.time}</span>
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