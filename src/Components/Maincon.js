import React, { Component } from 'react';
import { cardgallery_data, popular_data } from '../Components/Data';
import { Wrapper, Cardgallery, Sidecontent, Author, PopularRecipes, RecipeContainer, ImgContainer, TextContainer, Social } from './style';
import author from './Assets/images/author-photo.jpg';



class Maincon extends Component {
    render() {
        return (
            <Wrapper>
                <p>Latest Recipes <span className=""></span></p>
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
                <Sidecontent>
                    <Author>
                        <p className="title">Author</p>
                        <span className="name">Sandra <br /> Fortin</span>
                        <span className="contact"><a href="mailto:sandra@chow.com">sandra@chow.com</a></span>
                        <img className="authorImg" src={author} alt="" />
                        <p className="description">I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.</p>
                    </Author>
                    <PopularRecipes>
                        <p>Popular Recipes <span></span> </p>

                        {
                            popular_data.map((pitems, pidx)=>{
                                return(
                                    <div className="popularImg" key={"popularItems_"+pidx} >
                                    <img src={pitems.img} alt="as"/>
                                    <h4>{pitems.title}
                                    <i className="star-rating"></i>
                                    <i className="faicon fa fa-reply" aria-hidden="true"></i>
                                    </h4>
                                </div>
                                )
                            })
                        }
                    </PopularRecipes>
                    <Social>
                        <p>Share</p>
                        <div className="facebook">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <span className="anim">
                            <p>1,234</p>
                            <p className="Follow">Fans</p>
                            </span>
                            <p className="Likes">Like</p>
                        </div>
                        <div className="twitter">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <span className="anim">
                            <p>863</p>
                            <p className="Follow">Followers</p>
                            </span>
                            <p className="Likes">Follow</p>
                        </div>
                        <div className="google">
                            <i className="fa fa-google-plus" aria-hidden="true"></i>
                            <span className="anim">
                            <p>902</p>
                            <p className="Follow">Following</p>
                            </span>
                            <p className="Likes">Follow</p>
                        </div>
                    </Social>
                </Sidecontent>
            </Wrapper>
        )
    }
}

export default Maincon;