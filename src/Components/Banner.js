import React, { Component } from 'react';
import { Bann, BannInnerWrap, BannBtn, CaptionBann, BackDrop } from './style';
import { listLinkBtn, captionData } from '../Components/Data';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: "Baking",
            heading: "Mexican Grilled Corn Recipe",
            serve: "4 Servings",
            time: "30 MIN",
            cheff: "By Sandra Fortin",
            img: require('./Assets/images/sliderA_01.jpg'),
        }
    }
    switchContent = (idx) => {
        for (var i = 0; i < captionData.length; i++) {
            if (captionData[i].id === idx) {
                this.setState({
                    badge: captionData[i].badge,
                    heading: captionData[i].heading,
                    serve: captionData[i].serve,
                    time: captionData[i].time,
                    cheff: captionData[i].cheff,
                    img: captionData[i].img,
                })
            }
        }
    }

    render() {
        return (
            <Bann>
                <BannInnerWrap bgImage={this.state.img}>
                    <BackDrop id="back off">
                        <CaptionBann>
                            <li>{this.state.badge}</li>
                            <h1><a href="#"> {this.state.heading}</a></h1>
                            <p>
                                <span><i className="fa fa-cutlery" aria-hidden="true"></i> {this.state.serve}</span>
                                <span><i className="fa fa-clock-o" aria-hidden="true"></i> {this.state.time}</span>
                                <span><i className="fa fa-user" aria-hidden="true"></i> {this.state.cheff}</span>
                            </p>
                            <span>VIEW RECIPE</span>
                        </CaptionBann>
                    </BackDrop>
                </BannInnerWrap>
                <BannBtn>
                    <nav>
                        <ul className="btnWrap">
                            {listLinkBtn.map((items, i) => {
                                return <li onClick={() => this.switchContent("linkBtn_" + i)} key={"key_"+i}><span>{items.text1}<br />{items.text2}</span></li>
                            })}
                        </ul>
                    </nav>
                </BannBtn>
            </Bann>
        );
    }
}

export default Banner;