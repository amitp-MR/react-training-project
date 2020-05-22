import React, { Component } from 'react';
import { Shopheader, Shopcontent, Sidebar, Searchbar, Cart, Shopgallery, Headline, CheckoutBox, AboveSec, Belowsec, Viewcart, Checkout, ProductView, Subsec, Pricesec } from '../../Components/Common/StyleComponent/style';
import { Link } from 'react-router-dom';
import { viewcart_card } from '../../Data/Data';
import Productcard from '../Common/Productcard/Productcard';
import Axios from 'axios';
import Hoc from '../../Container/Hoc/Hoc';
import Loader from '../Common/Loader/Loader';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewcartcard: [],
            imagecart: "",
            category: "",
            price: "",
            loading:false,
        }

    }
    componentDidMount() {
        this.setState({ loading: true }, () => {
            Axios.get(`http://www.mocky.io/v2/5ec685363200007000d74ef5`)
                .then(res => {
                    const viewcartcard = res.data;
                    this.setState({
                        loading: false,
                        viewcartcard
                    });
                }).catch(error => {
                })
                .finally(() => {

                });
        });


    }
    updateCartHandler = (ids) => {

        for (var i = 0; i < viewcart_card.length; i++) {

            if (viewcart_card[i].id === ids) {
                console.log(viewcart_card[i].item)
                this.setState({
                    imagecart: viewcart_card[i].img,
                    category: viewcart_card[i].item,
                    price: viewcart_card[i].prices
                });
            }
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
                                    <Subsec>
                                        <img src={this.state.imagecart} alt="" />

                                    </Subsec>

                                    <Pricesec>

                                        <a href="!#">{this.state.category}</a>
                                       {this.state.price === ""? "Cart is empty":<p>1 X <span>{this.state.price}</span></p> } 
                                    </Pricesec>
                                </AboveSec>
                                <Belowsec>
                                    <p>Subtotal:<span>{this.state.price}</span></p>
                                    <div>
                                        <Viewcart><a href="!#" className="button">View Cart</a></Viewcart>
                                        <Checkout><a href="!#" className="button color">Checkout</a></Checkout>
                                    </div>
                                </Belowsec>
                            </CheckoutBox>
                        </Cart>
                    </Sidebar>
                    <Shopgallery>
                        {this.state.loading ? <Loader/> :
                        <ProductView>
                            {
                                this.state.viewcartcard.map((item, vidx) => {
                                    return (
                                        <Productcard
                                            item={item}
                                            key={vidx}
                                            onclick={(e) => this.updateCartHandler("cart" + vidx)}
                                        />
                                    );
                                })
                            }
                        </ProductView>
                        }
                    </Shopgallery>
                </Shopcontent>
            </div>
        )
    }
}


export default Hoc(Shop);



