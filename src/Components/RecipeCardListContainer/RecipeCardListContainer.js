import React, { Component } from 'react';
import { cardgallery_data } from '../../Data/Data';
import { Cardgallery } from '../../Components/Common/StyleComponent/style';
import Listcard from '../Common/Listcard/Listcard';

class RecipeCardListContainer extends Component {

    // changeEve = (value, e) => {
    //     e.preventDefault();
    //     console.log(value)
    // }

    render() {
        return (
            <Cardgallery>
                {
                    cardgallery_data.map((conitems, idx) => {
                        return (
                            <Listcard  listdata={conitems} key={idx}/>
                    )
                    })
                }
            </Cardgallery>
        );
    }
}


export default RecipeCardListContainer;