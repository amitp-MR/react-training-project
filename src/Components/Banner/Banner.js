import React, { Component } from 'react';
import { Bann, BannInnerWrap, BannBtn, CaptionBann, BackDrop } from '../Common/StyleComponent/style';
import { listLinkBtn, captionData } from '../../Data/Data';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const left = '-26%';
const right = '0%';
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: "Baking",
            heading: "Mexican Grilled Corn Recipe",
            serve: "4 Servings",
            time: "30 MIN",
            cheff: "By Sandra Fortin",
            img: require('../../Assets/images/sliderA_01.jpg'),
            left: right
        }
        this.switchContent = this.switchContent.bind(this);
    }
    switchContent = (idx, event) => {
        for (var i = 0; i < captionData.length; i++) {
            if (captionData[i].id === idx) {
                this.setState({
                    badge: captionData[i].badge,
                    heading: captionData[i].heading,
                    serve: captionData[i].serve,
                    time: captionData[i].time,
                    cheff: captionData[i].cheff,
                    img: captionData[i].img,
                });
            }
            if (idx === 'linkBtn_1') {
                this.setState({
                    left: left
                });
            }
            else if (idx === 'linkBtn_3') {
                this.setState({
                    left: right
                });
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
                        <ul className="btnWrap"
                            style={{ left: this.state.left }}
                            onClick={this.move}
                        >
                            {listLinkBtn.map((items, i) => {
                                return <li
                                    id={"linkBtn_"+i}
                                    onClick={(event) => this.switchContent("linkBtn_" + i, event)}
                                    key={"key_" + i}><span>{items.text1}<br />{items.text2}</span></li>
                            })}
                        </ul>
                    </nav>
                </BannBtn>
            </Bann>
        );
    }
}
export default Banner;