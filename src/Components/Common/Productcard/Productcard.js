import React from 'react';
import { Product, ImageBox, Captionbox} from '../StyleComponent/style';

const Productcard = (props) => {
    return (
        <Product key={props.vidx}>
            <ImageBox>
                <img src={props.item.img} alt="" />
                <span onClick={props.onclick}><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
            </ImageBox>
            <Captionbox>
                <span>{props.item.category}</span>
                <h5>{props.item.item}</h5>
                <p>{props.item.prices}</p>
            </Captionbox>
        </Product>
    );
}


export default Productcard;