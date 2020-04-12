import React, { Component } from 'react';
import { Bann, BannInnerWrap, BannBtn, CaptionBann,BackDrop } from './style';
import url from './Assets/images/sliderA_01.jpg'


var listLinkBtn = [
    {
        "text1": "Mexican Grilled",
        "text2": " Corn Recipe"
    },
    {
        "text1": "Roast Chicken",
        "text2": " With Lemon Gravy"
    },
    {
        "text1": "Avocado Melon Salad ",
        "text2": "With Lime Vinaigrette "
    },
    {
        "text1": "Chunky Beef Stew",
        "text2": ""
    },
    {
        "text1": "Farmhouse Vegetable ",
        "text2": "And Barley Soup"
    },

]
var captionData = [{
    "id":"linkBtn_0",
    "badge":"Baking",
    "heading":"Mexican Grilled Corn Recipe",
    "serve":"4 Servings",
    "time":"30 MIN",
    "cheff":"By Sandra Fortin",
    "view":"View Recipe"
},
{
    "id":"linkBtn_1",
    "badge":"",
    "heading":"",
    "serve":"",
    "time":"",
    "cheff":"",
    "view":""
},
{
    "id":"linkBtn_2",
    "badge":"",
    "heading":"",
    "serve":"",
    "time":"",
    "cheff":"",
    "view":""
},
{
    "id":"linkBtn_3",
    "badge":"",
    "heading":"",
    "serve":"",
    "time":"",
    "cheff":"",
    "view":""
},
{
    "id":"linkBtn_4",
    "badge":"",
    "heading":"",
    "serve":"",
    "time":"",
    "cheff":"",
    "view":""
}
]
class Banner extends Component {
    render() {
        return (
            <Bann>
                <BannInnerWrap style={{'backgroundImage':'url('+url+')'}}>
                    <BackDrop id="back off">
                        <CaptionBann>
                            <li>BAKING</li>
                            <h1><a href=""> Mexican Grilled <br/> Corn Recipe</a></h1>
                            <p><i>4 SERVINGS</i><i>30 MIN</i><i>BY SANDRA FORTIN</i></p>
                            <span>VIEW RECIPE</span>
                        </CaptionBann>
                    </BackDrop>
                </BannInnerWrap>
                <BannBtn>
                    <nav>
                        <ul>
                            {listLinkBtn.map((items, i) => {
                                return <li key={i} id={"linkBtn_"+i}><span>{items.text1}<br/>{items.text2}</span></li>
                            })}
                        </ul>
                    </nav>
                </BannBtn>
            </Bann>
        );
    }
}

export default Banner;