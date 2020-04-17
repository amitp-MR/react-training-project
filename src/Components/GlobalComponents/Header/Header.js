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
                                    return <li className="navlist" key={idx}><a value={items.text + '_' + idx}>{items.text}<i className="fa fa-caret-down"></i></a>
                                        <ul className="dp">
                                            {items.submenu.map((sub, subIdx) => {
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