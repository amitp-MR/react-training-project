import React, { Component } from 'react';
import Logo from '../../Assets/images/logo.jpg';
import {
    Head,
    Wrapper,
    HeaderLogo,
    HeaderNav
} from '../style';

var list = [
    {
        "text": "Home",
        "submenu": []
    },
    {
        "text": "Demos",
        "submenu": [
            {
                "subtext": "Grid Homepage"
            },
            {
                "subtext": "List HomePage"
            },
            {
                "subtext": "Boxed Version"
            }
        ]
    },
    {
        "text": "Recipes",
        "submenu": [
            {
                "subtext": "Browse Recipes"
            },
            {
                "subtext": "Recipe Page #1"
            },
            {
                "subtext": "Recipe Page #2"
            }
        ]
    },
    {
        "text": "Pages",
        "submenu": [
            {
                "subtext": "Shortcodes"
            },
            {
                "subtext": "Typography"
            },
            {
                "subtext": "Contact"
            }
        ]
    },
    {
        "text": "Shop",
        "submenu": [
            {
                "subtext": "Shop"
            },
            {
                "subtext": "Product Pages"
            }
        ]
    },
    {
        "text": "Submit Recipe",
        "submenu": []
    }
]

function Header() {
    return (
        <Head>
            <Wrapper>
                <HeaderLogo><img src={Logo} alt="" /></HeaderLogo>
                <div className="nav-content">
                    <HeaderNav className="">
                        <ul>
                            {
                                list.map((items, idx) => {
                                    return <li className="navlist" key={idx}><a value={items.text + '_' + idx}>{items.text}<i className="fa fa-caret-down"></i></a>
                                        <ul className="dp">
                                            { items.submenu.map((sub)=>{
                                                    return <li className=""><a>{sub?sub.subtext:null}</a></li>
                                            })}
                                        </ul>
                                    </li>
                                })
                            }
                        </ul>
                    </HeaderNav>
                </div>
            </Wrapper>
        </Head>
    );
}

export default Header;