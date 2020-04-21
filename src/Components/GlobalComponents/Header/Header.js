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
                                    return <li className="navlist" key={"key_"+idx}><a value={items.text + '_' + idx}>{items.text}<i className="fa fa-caret-down"></i></a>
                                        <ul className="dp">
                                            {items.submenu.map((sub, subIdx) => {
                                            return  <li className="Subnavlist">{sub.subtext}</li>
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