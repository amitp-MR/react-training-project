import React, { Component } from 'react';
import { Gridgallery } from '../Common/StyleComponent/style';
import { cardgallery_data } from '../../Data/Data';
import Gridcard from '../Common/GridCard/Gridcard';

class RecipeCardGridContainer extends Component {
    render() {
        return (
            <Gridgallery>
                {
                    cardgallery_data.map((conitems, idx) => {
                        return (
                           <Gridcard griddata={conitems} key={idx} />
                        )
                    })
                }
            </Gridgallery>
        );
    }
}


export default RecipeCardGridContainer;