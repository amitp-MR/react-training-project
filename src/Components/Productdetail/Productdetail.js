import React from 'react';
import { 
    Productdetailwrapper, Productview, Descrptblock,
    Productimg, Productcaption, Producttitle, Shopheader,
    Productprice, Productdescription, Buttonblock, 
    IncrementBtn, RelatedProducts, Productdes, Btnblock
} from '../Common/StyleComponent/style';
import { viewcart_card } from '../../Data/Data';
import Productcard from '../Common/Productcard/Productcard';
import {Addbtn, Ctabtn} from '../Common/Input/CtaButton';

const Productdetail = (props) => {
    return (
        <div>
             <Shopheader>
                    <div>
                        <h3>Shop</h3>
                        <p>You are here: <span>Home</span> > Shop > <span> Cardamom Pod</span></p>
                    </div>
                </Shopheader>
        <Productdetailwrapper>
            <Productview>
                <Productimg>
                    <img alt="vastcard" src="http://www.vasterad.com/themes/chow/images/product_01.jpg" />
                </Productimg>
                <Productcaption>
                    <Producttitle>Cardamom Pods</Producttitle>
                    <Productprice>$2.99</Productprice>
                    <Productdescription>Maecenas consequat mauris nec semper tristique. Etiam fermentum augue ac vulputate pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque arcu.</Productdescription>
                    <Buttonblock>
                        <IncrementBtn><span>-</span><p>12</p><span>+</span></IncrementBtn>
                            <Addbtn><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</Addbtn>
                    </Buttonblock>
                </Productcaption>
            </Productview>
            <Productdes>
                <Btnblock>
                        <Ctabtn>Item Description</Ctabtn>
                        <Ctabtn>Action Information</Ctabtn>
                        <Ctabtn>Review (0)</Ctabtn>
                </Btnblock>
                <Descrptblock>
                Lorem ipsum pharetra lorem felis. Aliquam egestas consectetur elementum class aptentea taciti sociosqu ad litora torquent perea conubia nostra lorem consectetur adipiscing elit. Donec vestibulum justo a diam ultricies pellentesque. Fusce vehicula libero arcu, vitae ornare turpis elementum at. Etiam posuere quam nec ligula dignissim iaculis donec eleifend laoreet ornare. Quisque mattis luctus est, a placerat elit pharetra.
                </Descrptblock>
            </Productdes>
            <RelatedProducts>
                {
                    viewcart_card.slice(0, 4).map((item, vidx) => {
                        return (
                            <Productcard
                                item={item}
                                key={vidx}
                            />
                        );
                    })
                }
            </RelatedProducts>
        </Productdetailwrapper>
        </div>
    )
}

export default Productdetail;