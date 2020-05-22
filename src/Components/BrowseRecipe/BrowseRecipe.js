import React from 'react';
import { Browserecipestyle, Shopheader, Title, BrowseGallery, SearchBox } from '../Common/StyleComponent/style';
import { cardgallery_data } from '../../Data/Data';
import Listcard from '../../Components/Common/Listcard/Listcard';
import Hoc from '../../Container/Hoc/Hoc';


const BrowseRecipe = (props) => {
    return (
        <Browserecipestyle>
            <Shopheader>
                <SearchBox>
                    <Title>Browse Recipes</Title>
                </SearchBox>
            </Shopheader>
            <BrowseGallery>
                {
                    cardgallery_data.slice(0, 8).map((conitems, idx) => {
                        return (
                            <Listcard listdata={conitems} key={idx} />
                        )
                    })
                }
            </BrowseGallery>
        </Browserecipestyle>
    );
}
export default Hoc(BrowseRecipe);