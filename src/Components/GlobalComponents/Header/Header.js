import React from 'react';
import Logo from '../../Assets/images/logo.jpg';
import { list } from '../../Data';
import {
    Head,
    Wrapper,
    HeaderLogo,
    HeaderNav
} from '../style';

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
                                console.log(items.submenu)
                                return <li className="navlist" key={"key_"+idx}><a value={items.text + '_' + idx}>{items.text} {(items.submenu !="" ? <i className="fa fa-caret-down"></i>: "")}</a>
                                        <ul className="dp">
                                            {items.submenu.map((sub, subIdx) => {
                                            return  (sub.subtext != ""?<li className="Subnavlist" key={"subitem_"+subIdx}>{sub.subtext}</li>:"")
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