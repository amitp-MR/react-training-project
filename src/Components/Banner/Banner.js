import React, {useState}  from 'react';
import { Bann, BannInnerWrap, BannBtn, CaptionBann, BackDrop } from '../Common/StyleComponent/style';
import { listLinkBtn, captionData } from '../../Data/Data';

const Banner = (props)=> {
    const [currState , updateState] = useState({
                    badge: "Baking",
                    heading: "Mexican Grilled Corn Recipe",
                    serve: "4 Servings",
                    time: "30 MIN",
                    cheff: "By Sandra Fortin",
                    img: require('../../Assets/images/sliderA_01.jpg'),
    });

    function switchContent(idx, e) {

        for (var i = 0; i < captionData.length; i++) {
            if (captionData[i].id === idx) {
                updateState({
                    badge: captionData[i].badge,
                    heading: captionData[i].heading,
                    serve: captionData[i].serve,
                    time: captionData[i].time,
                    cheff: captionData[i].cheff,
                    img: captionData[i].img,
                });
            }
            
        }
    }



    return(
        <Bann>
        <BannInnerWrap bgImage={currState.img}>
            <BackDrop id="back off">
                <CaptionBann>
                    <li>{currState.badge}</li>
                    <h1><a href="!#"> {currState.heading}</a></h1>
                    <p>
                        <span><i className="fa fa-cutlery" aria-hidden="true"></i> {currState.serve}</span>
                        <span><i className="fa fa-clock-o" aria-hidden="true"></i> {currState.time}</span>
                        <span><i className="fa fa-user" aria-hidden="true"></i> {currState.cheff}</span>
                    </p>
                    <span>VIEW RECIPE</span>
                </CaptionBann>
            </BackDrop>
        </BannInnerWrap>
        <BannBtn>
            <nav>
                <ul className="btnWrap"
                    style={{ left: currState.left}}
                >
                    {listLinkBtn.map((items, i) => {
                        return <li
                            id={"linkBtn_"+i}
                            onClick={() => switchContent("linkBtn_" + i)}
                            key={"key_" + i}>
                            <span>{items.text1}<br />{items.text2}</span></li>
                    })}
                </ul>
            </nav>
        </BannBtn>
    </Bann>
    );
}
export default Banner;