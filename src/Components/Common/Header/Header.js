import React from 'react';
import Logo from '../../../Assets/images/logo.jpg';
import { list } from '../../../Data/Data';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import {Head,Wrapper,HeaderLogo,HeaderNav} from '../StyleComponent/style';

const Header = (props) => {
    const chnageRoutes = (path) => {
        props.history.push(path)
        console.log(path);
    }
    return (
        <Head>
            <Wrapper>
                <HeaderLogo><img src={Logo} alt="" /></HeaderLogo>
                <div className="nav-content">
                    <Router>
                    <Switch>
                    <HeaderNav className="">
                        <ul>
                            {
                                list.map((items, idx) => {
                                return <li className="navlist" key={"key_"+idx}>
                                        <a onClick={() => chnageRoutes(items.path)} value={items.text + '_' + idx}>
                                            {items.text} {(items.submenu.length !==0 ? <i className="fa fa-caret-down"></i>: "")}
                                        </a>
                                        <ul className="dp">
                                            {items.submenu.map((sub, subIdx) => {
                                            return  (sub.subtext !== ""?<li className="Subnavlist" key={"subitem_"+subIdx}>{sub.subtext}</li>:"")
                                            })}
                                        </ul>
                                    </li>
                                })
                            }
                        </ul>
                    </HeaderNav>
                    </Switch>
                    </Router>
                </div>
            </Wrapper>
        </Head>
    );
}

export default Header;