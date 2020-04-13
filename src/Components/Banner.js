import React, { Component } from 'react';
import { Bann, BannInnerWrap, BannBtn, CaptionBann,BackDrop, bgImage } from './style';
import linkBtn_0 from './Assets/images/sliderA_01.jpg';

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
    "badge":"SALADS",
    "heading":"Avocado Melon Salad With Lime Vinaigrette",
    "serve":"1 SERVINGS",
    "time":"15 MIN",
    "cheff":"BY SANDRA FORTIN",
    "view":"View Recipe"
},
{
    "id":"linkBtn_3",
    "badge":"BEEF",
    "heading":"Chunky Beef Stew",
    "serve":"4 Servings",
    "time":"1 HR 20 MIN",
    "cheff":"BY SANDRA FORTIN",
    "view":"View Recipe"
},
{
    "id":"linkBtn_4",
    "badge":"SOUPS",
    "heading":"Farmhouse Vegetable And Barley Soup",
    "serve":"4 Servings",
    "time":"1 HR 30 MIN",
    "cheff":"BY SANDRA FORTIN",
    "view":"View Recipe"
}
]
 var dvStyle={
        
      };
class Banner extends Component {
    constructor(props){  
        super(props);  
        this.state={
            badge:"Baking",
            heading:"Mexican Grilled Corn Recipe",
            serve:"4 Servings",
            time:"30 MIN",
            cheff:"By Sandra Fortin",
            view:"View Recipe",
            img:'',
        }
      } 
    switchContent=(idx)=>{
        for (var i = 0; i < captionData.length; i++) {
            if (captionData[i].id === idx) {
                    
                     this.setState({
                         badge:captionData[i].badge,
                         heading:captionData[i].heading,
                         serve:captionData[i].serve,
                         time:captionData[i].time,
                         cheff:captionData[i].cheff,
                         img:'backgroundImage:url(' + linkBtn_0 + ')'
                     })
            }
        }
    }
   
    render() {
        return (
            <Bann>
                <BannInnerWrap style={{}}>
                    <BackDrop id="back off">
                        <CaptionBann>
                            <li>{this.state.badge}</li>
                                    <h1><a href=""> {this.state.heading}</a></h1>
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
                                return <li onClick={()=>this.switchContent("linkBtn_"+i)} key={i} id={"linkBtn_"+i}><span>{items.text1}<br/>{items.text2}</span></li>
                            })}
                        </ul>
                    </nav>
                </BannBtn>
            </Bann>
        );
    }
}

export default Banner;