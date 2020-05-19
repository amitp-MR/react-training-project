import React from 'react'
import { GridimgContainer, GridContainer, GridContentContainer } from '../StyleComponent/style';
import { Link } from 'react-router-dom';

const Gridcard=(props)=> {
    const stars = [];
    for(let i=0; i<props.griddata.stars; i++){
        stars.push(<i key={i} className="contentstars fa fa-star" aria-hidden="true"></i>);  
    };
    console.log(props.griddata.stars);
    return (
        <GridContainer  className="recipecontainer">
            <GridimgContainer>
                <Link to="/Viewrecipe" className="viewrecipe">VIEW RECIPE</Link>
                <img src={props.griddata.img} />
            </GridimgContainer>
            <GridContentContainer>
                <div>
                    <h3>{props.griddata.title}</h3>
                    <p>{props.griddata.recipeContent}</p>
                </div>
                <p><span>
                    {stars}
                </span><span>{props.griddata.time}</span><span>{props.griddata.author}}</span></p>
            </GridContentContainer>
        </GridContainer>
    )
}

export default Gridcard;
