import React from 'react';
import { FooterWrapper,FooterContent } from '../style';


const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <div className="section1">
                    <p className="heading">About</p>
                    <p> Cras at ultrices erat, sed vulputate eros.
                        Nunc at augue gravida est fermentum vulputate.
                        Pellentesque et ipsum in dui malesuada tempus.
                </p>
                </div>
                <div className="section2">
                    <p className="heading">Archives</p>
                    <ul>
                        <li><i className="fa fa-caret-right" aria-hidden="true"> </i> June 2014</li>
                        <li><i className="fa fa-caret-right" aria-hidden="true"> </i> July 2014</li>
                        <li><i className="fa fa-caret-right" aria-hidden="true"> </i> August 2014</li>
                        <li><i className="fa fa-caret-right" aria-hidden="true"> </i> September 2014</li>
                        <li><i className="fa fa-caret-right" aria-hidden="true"> </i> November 2014</li>
                    </ul>
                </div>
                <div className="section3">
                    <p className="heading">Recipes</p>
                    <ul>
                        <li><i className="fa fa-caret-right" aria-hidden="true"> </i> Browse Recipes</li>
                        <li><i className="fa fa-caret-right" aria-hidden="true"> </i> Recipe Page</li>
                        <li><i className="fa fa-caret-right" aria-hidden="true"> </i> Submit Recipe</li>
                    </ul>
                </div>
                <div className="section4">
                    <p className="heading">Newsletter</p>
                    <p> Sign up to receive email 
                        updates on new product 
                        announcements, gift ideas, 
                        sales and more.
                    </p>
                <div className="subs"><input className="subInp" type="text" placeholder="mail@example.com"/><span className="subBtn">SUBSCRIBE</span></div>
                </div>
            </FooterContent>
            <div className="copyRight">
                  <p className="copyRightText"> © Copyright 2014 by Chow. All Rights Reserved. </p>
                </div>
        </FooterWrapper>
    );
}


export default Footer;