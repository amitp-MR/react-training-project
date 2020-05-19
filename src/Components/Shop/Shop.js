import React, { Component } from 'react';
import { Shopheader, Shopcontent, Sidebar, Searchbar, Cart, Shopgallery, Headline, CheckoutBox, AboveSec, Belowsec, Viewcart, Checkout, Dropdown, ProductView, Product, ImageBox, Captionbox } from '../../Components/Common/StyleComponent/style';
import { Link } from 'react-router-dom';
import { viewcart_card } from '../../Data/Data';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    render() {
        return (
            <div>
                <Shopheader>
                    <div>
                        <h3>Shop</h3>
                        <p>You are here: <span><Link to="/Home">Home</Link></span> > Shop</p>
                    </div>
                </Shopheader>
                <Shopcontent>
                    <Sidebar>
                        <Searchbar>
                            <div className="subs"><input className="subInp" type="text" placeholder="search for recipes" /><span className="subBtn"><i className="fa fa-search" aria-hidden="true"></i></span></div>
                        </Searchbar>
                        <Cart>
                            <Headline>Cart</Headline>
                            <CheckoutBox>
                                <AboveSec>
                                    <div>
                                        <img src="" alt="" />

                                    </div>

                                    <div>
                                        <a>Mixed Herbs</a>
                                        <p>1 X $2.99</p>
                                    </div>
                                </AboveSec>
                                <Belowsec>
                                    <p>Subtotal:<span> $2.99</span></p>
                                    <div>
                                        <Viewcart><a href="#" class="button">View Cart</a></Viewcart>
                                        <Checkout><a href="#" class="button color">Checkout</a></Checkout>
                                    </div>
                                </Belowsec>
                            </CheckoutBox>
                        </Cart>
                    </Sidebar>
                    <Shopgallery>
                        <ProductView>
                            {
                                viewcart_card.map((item, vidx) => {
                                    console.log(item);
                                    return (
                                        <Product>
                                            <ImageBox>
                                                <img src={item.img} alt="" />
                                                <span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                            </ImageBox>
                                            <Captionbox>
                                                <span>{item.category}</span>
                                                <h5>{item.item}</h5>
                                                <p>{item.prices}</p>
                                            </Captionbox>
                                        </Product>
                                    );
                                })
                            }
                        </ProductView>
                    </Shopgallery>
                </Shopcontent>
            </div>
        )
    }
}


export default Shop;