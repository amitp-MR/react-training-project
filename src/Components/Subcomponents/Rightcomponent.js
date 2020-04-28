import React from 'react';
import { popular_data, author_content } from '../Data';
import {  Sidecontent, Author, PopularRecipes, Social, Searchbar } from './style';

const Rightcomponent = () =>{
    return(
        <Sidecontent>
        <Searchbar>
            <div className="subs"><input className="subInp" type="text" placeholder="search for recipes" /><span className="subBtn"><i className="fa fa-search" aria-hidden="true"></i></span></div>
        </Searchbar>
        <Author>
            {
                author_content.map((authIdx, aidx) => {
                    return (
                        <div key={"popularItems_" + authIdx}>
                            <p className="title">{authIdx.title}</p>
                            <span className="name">{authIdx.name} <br />{authIdx.lastname}</span>
                            <span className="contact"><a href="mailto:sandra@chow.com">{authIdx.contact}</a></span>
                            <img className="authorImg" src={authIdx.authorImg} alt="" />
                            <p className="description">{authIdx.description}</p>
                        </div>

                    )

                })
            }
        </Author>
        <PopularRecipes>
            <p>Popular Recipes <span></span> </p>
            {
                popular_data.map((pitems, pidx) => {
                    return (
                        <div className="popularImg" key={"popularItems_" + pidx} >
                            <img src={pitems.img} alt="as" />
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
    )
}


export default Rightcomponent;