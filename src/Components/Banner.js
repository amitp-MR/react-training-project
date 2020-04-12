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
    "badge":"CURRY",
    "heading":"Roast Chicken With Lemon Gravy",
    "serve":"4 Servings",
    "time":"1 HR 20 MIN",
    "cheff":"BY SANDRA FORTIN",
    "view":"View Recipe"
},
{
    "id":"linkBtn_2",
    "badge":"",
    "heading":"",
    "serve":"4 Servings",
    "time":"1 HR 20 MIN",
    "cheff":"BY SANDRA FORTIN",
    "view":"View Recipe"
},
{
    "id":"linkBtn_3",
    "badge":"",
    "heading":"",
    "serve":"4 Servings",
    "time":"1 HR 20 MIN",
    "cheff":"BY SANDRA FORTIN",
    "view":"View Recipe"
},
{
    "id":"linkBtn_4",
    "badge":"",
    "heading":"",
    "serve":"4 Servings",
    "time":"1 HR 20 MIN",
    "cheff":"BY SANDRA FORTIN",
    "view":"View Recipe"
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
                            <p><span><i class="fa fa-cutlery" aria-hidden="true"></i> 4 SERVspanNGS</span><span><i class="fa fa-clock-o" aria-hidden="true"></i> 30 MspanN</span><span><i class="fa fa-user" aria-hidden="true"></i> BY SANDRA FORTspanN</span></p>
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