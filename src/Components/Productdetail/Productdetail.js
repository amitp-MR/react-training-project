import React from 'react';
import {Productdetailwrapper, Productview, Productimg, Productcaption, Producttitle, Productprice, Productdescription, Buttonblock, IncrementBtn, Addtocartbtn} from '../Common/StyleComponent/style';
import {} from '../../Data/Data';

const Productdetail = (props) =>{
    return(
        <Productdetailwrapper>
           <Productview>
               <Productimg>
                   <img src="http://www.vasterad.com/themes/chow/images/product_01.jpg" />
               </Productimg>
               <Productcaption>
                   <Producttitle>Cardamom Pods</Producttitle>
                   <Productprice>$2.99</Productprice>
                   <Productdescription>Maecenas consequat mauris nec semper tristique. Etiam fermentum augue ac vulputate pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque arcu.</Productdescription>
                   <Buttonblock>
                       <IncrementBtn><span>-</span><p>12</p><span>+</span></IncrementBtn>
                       <Addtocartbtn><i className="fa fa-shopping-cart" aria-hidden="true"></i> ADD TO CART</Addtocartbtn>
                   </Buttonblock>
               </Productcaption>
           </Productview>
        </Productdetailwrapper>
    )
}

export default Productdetail;