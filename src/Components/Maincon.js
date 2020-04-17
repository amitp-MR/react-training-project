import React, { Component } from 'react';
import { cardgallery_data } from '../Components/Data';
import { Wrapper, Cardgallery, Sidecontent, Author , RecipeContainer, ImgContainer, TextContainer} from './style';
import author from './Assets/images/author-photo.jpg';

class Maincon extends Component{

    render(){
        return(
            <Wrapper>
                <p>Latest Recipes <span className=""></span></p>
               <Cardgallery>
               {
                cardgallery_data.map((conitems, idx) => {
                    return(
                        <RecipeContainer key={idx} className="recipecontainer">
                            <ImgContainer>
                            <span className="viewrecipe" id={"view_"+idx}><a href="#">VIEW RECIPE</a></span>
                                    <img src={conitems.img} alt={ "recipeImg_"+idx } />
                            </ImgContainer>
                            <TextContainer>
                                <a>{conitems.title}</a>
                                <p></p>
                                <div>
                                    <span>stars</span><span> {conitems.time}</span>
                                </div>
                            </TextContainer>
                        </RecipeContainer>
                    )
                 })
                }
               </Cardgallery>
               <Sidecontent>
                        <Author>
                            <p className="title">Author</p>
                            <span className="name">Sandra <br /> Fortin</span>
                            <span className="contact"><a href="mailto:sandra@chow.com">sandra@chow.com</a></span>
                            <img className="authorImg" src={author} alt="" />
                            <p className="description">I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.</p>
                        </Author>
               </Sidecontent>
            </Wrapper>
        )
    }
}

export default Maincon;