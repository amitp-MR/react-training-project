import styled from 'styled-components';


export const Bann = styled.div`
    height:490px;
    background-color:fff;
`

export const BannInnerWrap = styled.div`
    height:415px;
    width:100%;
    background-color:#404040;
    background: url(${props => props.bgImage});
    transition:.6s;
`
export const BackDrop = styled.div`
    background-color:rgba(0,0,0,0.4);
    width:100%;
    height:100%;
`
export const CaptionBann = styled.div`
    padding:6% 0px;
    width:75%;
    margin:0 auto;
    li{
        display:inline;
        color:#fff;
        background:#8dc63f;
        font-weight: 300;
        text-transform: uppercase;
        font-size: 13px;
        margin: 0 1px 0 0;
        padding: 5px 9px;
        font-family: "open sans";
    }
    h1{
        font-size: 48px;
        line-height: 50px;
        font-family: arvo;
        font-weight:100;
        width: 415px;
        margin:10px 0px;
        a{
            text-decoration:none;
            color:#fff;
        }
    }
    p{
        span{
            color:#fff;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 13px;
            margin: 0 15px 0 0;
            border: none;
            background-color:transparent;
            display: inline;
        }
    }
    span{
        border: 3px solid #fff;
        display: inline-block;
        background-color: rgba(255,255,255,.2);
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        padding: 10px 0;
        width: 130px;
        text-align: center;
        -webkit-transition: all .2s ease-in-out!important;
        -moz-transition: all .2s ease-in-out!important;
        -o-transition: all .2s ease-in-out!important;
        -ms-transition: all .2s ease-in-out!important;
        transition: all .2s ease-in-out!important;
        margin-top: 18px;
    }

`

export const BannBtn = styled.div`
    buttonTrue{
        background-color:#8dc63f;
    }
    buttonFalse{
        background-color:#f2f2f2;
    }
    nav{
        margin:0 auto;
        width:75%;
        overflow:hidden;
    ul{
        margin:0;
        padding:0;
        display: inline-flex;
        li{
            border-right: .5px solid #c1c1c1;
            border-bottom: .5px solid #c1c1c1;
            cursor:pointer;
            background: #f2f2f2;
            height:75px;
            text-align: center;
            width:245px;
            display:flex;
            list-style-type: none;
            justify-content: center;
            align-items: center;
            span{
                color:#808080;
                display:block;
            }
        }
        // li:hover{
        //     color:#fff;
        //     background:#8dc63f;
        //     span{
        //         color:#fff;
        //     }
        }
    }
    .activeButton{
        color:#fff;
        background:#8dc63f;
        span{
               color:#fff;
            }
      }
      
      .deactiveButton{
        background: #f2f2f2;
        color: black;
      }
}
`
export const MainWrapper = styled.div`
`

export const Wrapper = styled.div`
    display:block;
    width:75%;
    margin:0 auto;
    height:100%;
    .Contentheading{
        font-size: 22px;
        background-color: #fff;
        padding-right: 10px;
        font-weight:lighter;
        font-family: sans-serif;
    }
    .viewComponents{
        margin-left:20%;
    }
    .Listview,.Gridview{
        font-size:14px;
        text-decoration: none;
        padding: 10px 20px;
        cursor: pointer;
        font-weight: 700;
        margin:10px;
    }
    .Listview{
        color: #fff;
        background-color: #8dc63f;
    }
    .Gridview{
        color: #000;
        background: #e1e1e1;
    }
`
export const Sidecontent = styled.div`
    float:right;
    width:25%;
    height:100%;
`
export const Author = styled.div`
    position:relative;
    margin: 0;
    border: 1px solid #e8e8e8;
    padding: 28px 25px;
    margin-top: 20%;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    .title{
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        color: #8dc63f;
        display: block;
    }
    .name{
        font-size: 20px;
        font-weight: 700;
        color: #606060;
    }
    .contact{
      display:block;
      a{
        text-decoration: none;
        outline: 0;
        color: #a0a0a0;
        margin: 5px 0 0;
        display: inline-block;
        font-size:14px;
      }
    }
    .authorImg{
        border-radius: 50%;
        position: absolute;
        top: 59px;
        right: 33px;
        height: 64px;
        width: 64px;
    }
    .description{
        font-size:14px;
        line-height:24px;
        color:#808080;
        font-weight:0;
    }
`
export const PopularRecipes = styled.div`
        color: #606060;
        font-weight: 500;
        font-size:20px;
        cursor:pointer;
        .popularImg:hover .faicon{
            right: 0px;
            transition:.6s;
        }
        .faicon{
            position: absolute;
            top: 0;
            right: -33px;
            background: #8dc63f;
            padding: 10px;
            transition:.6s;
        }
    span{
        display:inline-block;
        width: 34%;
        border: 1px solid #ebebeb;
        vertical-align: middle;
    }
    div{
        overflow: hidden;
        height:100px;
        position:relative;
        margin: 3px 0px;
    img{
        width:100%;
        position:absolute;
        height: 100%;
        background-position: center;
        background-size: cover;
    }
    
    h4{
        color:#fff;
        font-size: 14px;
        font-weight: 700;
        margin:0;
        line-height: 24px;
        position: absolute;
        padding: 15px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        .star-rating::after {
            content: "    ";
            font-family: fontawesome;
            color: rgb(255, 199, 65);
            display: block;
            position: absolute;
            font-size: 16px;
            z-index: 10;
            letter-spacing: -0.5px;
            font-style: normal;
        }
    }
}
`

export const Social = styled.div`
        .facebook{
            color: #fff;
            background-color: #3b5998;
            width:117px;
            height:106px;
            text-align:center;
            display: inline-block;
            overflow:hidden;
            margin-right:5px;
            padding: 15px 0px;
            position: relative;
            p{
                margin:0px;
            }
            i{
                font-size:30px;
                margin-bottom:10px;
                display: block;
            }
            .Follow{
                font-size:13px;
                width:50px;
                margin:0 auto;

            }
            .Likes{
                font-size:13px;
                background-color:rgba(255,255,255,.4);
                width:50px;
                margin:0 auto;
                opacity:0;
                transition:.3s;
                position:absolute;
                left: 30%;
                padding: 5px 0px;
                top: 74px;
            }
            .anim{
                position:absolute;
                left: 30%;
                top: 55px;
                opacity:1;
                transition:.3s;
            }
        }
        .facebook:hover .Likes{
                opacity:1;
                transition:.3s;
                top: 60px;
        }
        .facebook:hover:hover .anim{
                top:38px;
                opacity:0;
                transition:.3s;
        }
        .twitter{
            color: #fff;
            background-color: #33bcf3;
            width:117px;
            height:106px;
            text-align:center;
            display: inline-block;
            overflow:hidden;
            padding: 15px 0px;
            position: relative;
            p{
                margin:0px;
            }
            i{
                font-size:30px;
                margin-bottom:10px;
            }
            .Follow{
                font-size:13px;
                width:50px;
                margin:0 auto;

            }
            .Likes{
                font-size:13px;
                background-color:rgba(255,255,255,.4);
                width:50px;
                margin:0 auto;
                opacity:0;
                transition:.3s;
                position:absolute;
                left: 30%;
                padding: 5px 0px;
                top: 74px;
            }
            .anim{
                position:absolute;
                left: 30%;
                top: 55px;
                opacity:1;
                transition:.3s;
            }
        }
        .twitter:hover .Likes{
                opacity:1;
                transition:.3s;
                top: 60px;
        }
        .twitter:hover:hover .anim{
                top:38px;
                opacity:0;
                transition:.3s;
        }
        }
        .google{
            color: #fff;
            background-color: #dd4b39;
            width:117px;
            height:106px;
            text-align:center;
            display: inline-block;
            overflow:hidden;
            padding: 15px 0px;
            position: relative;
            p{
                margin:0px;
            }
            i{
                font-size:30px;
                margin-bottom:10px;
            }
            .Follow{
                font-size:13px;
                width:50px;
                margin:0 auto;

            }
            .Likes{
                font-size:13px;
                background-color:rgba(255,255,255,.4);
                width:50px;
                margin:0 auto;
                opacity:0;
                transition:.3s;
                position:absolute;
                left: 30%;
                padding: 5px 0px;
                top: 74px;
            }
            .anim{
                position:absolute;
                left: 30%;
                top: 55px;
                opacity:1;
                transition:.3s;
            }
        }
        .google:hover .Likes{
                opacity:1;
                transition:.3s;
                top: 60px;
        }
        .google:hover:hover .anim{
                top:38px;
                opacity:0;
                transition:.3s;
        }
        }
        
       
`
export const Searchbar = styled.div`
margin-bottom:10px;
.subs{
    position:relative;
    top: -26px;
}
.subBtn{
    background-color: #8dc63f;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    float: right;
    position: relative;
    padding: 12px 15px;
    margin: 0;
    height: 44px;
    transition: all .2s ease-in-out;
    border: none;
    color: #fff;
    box-shadow: none;
}
.subInp{
    width:100%;
    position:absolute;
    color: gray;
    font-weight: 600;
    font-size: 13px;
    padding: 11px 16px;
    height: 44px;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    outline:none;
}
`
export const Ttlebar = styled.div`
    background-color: #f6f6f6;
    min-height: 88px;
    margin: 0 0 40px;
    div{
        width:75%;
        margin:0 auto;
        p{
            font-size: 24px;
            font-weight: 500;
            float: left;
            width: 100%;
            margin: 29px 0 0;
            color: #606060;
        }
    }
   
`

export const Recipefrom = styled.form`
    width:75%;
    margin:0 auto;

`
export const RecipeBlock = styled.div`
    margin-bottom:25px;
    label{
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 10px;
        color: #606060;
        font-weight: 500;
        display: block;
    }
    input,textarea,select{
        position: relative;
        font-weight: 600;
        width: 100%;
        max-width: 100%;
        border: 1px solid #ddd;
        font-size: 14px;
        padding: 14px 15px 12px;
        line-height: 24px;
        height: 52px;
        box-sizing: border-box;
        display: inline-block;
        top: 0;
        color: #777;
        outline:none;
    }
    select{
        -webkit-appearance: none;
    }
`

export const RecipeWrapper = styled.div`
    height:100%;
    position:relative;
`
export const Recipeheader = styled.div`
    height:200px;
    width:100%;
    background: url(${props => props.bgIm});

`

export const Recipecontainer = styled.div`
    display:flex;
    width:75%;
    margin:0 auto;
    height:100%;
    padding:5% 0px;
`
export const RightContainer = styled.div`
    width:75%;
    padding:20px;
    position:relative;
`
export const Recipecard = styled.div`
    position:relative;
    width:95%;
    background-color:#f8f8f8;
    top: -10%;
    left: 0;
    clip-path: polygon(91.9% 0%,100% 3.28%,100% 100%,0% 100%,0% 0);
    &::after {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        background: #e0e0e0;
        border: 1px solid #e0e0e0;
        width: 50px;
        height: 50px;
    }

`
export const Recipeheading = styled.div`
padding:35px;
h4{
    font-size: 30px;
    font-family: arvo;
    margin: 0 0 1px;
    z-index: 20;
    position: relative;
    width: 90%;
    line-height: 36px;
    color: #606060;
    font-weight: 500;
}
`
export const Carousel = styled.div`
    height:320px;
    background: url(${props => props.bgIm});
    position:relative;
    p{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.2);
        top: 0;
        left: 0;
        box-sizing: border-box;
        margin: 0;
        span{
            position: relative;
            right: 0;
            bottom: -80%;
            display: inline-block;
            float: right;
            i{
                font-size: 50px;
                color: snow;
                letter-spacing: 10px;
                cursor:pointer;
            }
        }
        
    }

`
export const Carouselcontent = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    .printbtn{
        background-color: #8dc63f;
        color:#fff;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        padding: 5px 10px;
        display: inline-block;
        line-height: 24px;
    }

    div{
        display:flex;
        padding:0px;
        span{
            flex:1;
            width:80px;
            font-size:13px;
            font-weight:100;
            color: #707070;
            border-right:0.6px solid #707070;
            margin-right:15px;
            p{
                font-size:14px;
                font-weight: 600;
                color: #707070;
                margin:0px;
            }
        }
       
    }
`
export const Recipedescription = styled.div`
    background:#fff;
    padding: 15px 0;
    margin-bottom: 0;
    p{
        font-size:14px;
        font-weight:100;
        color:grey;
    }
`
export const Recipeingredients =styled.ul`
    p{
        font-size:22px;
    }
    background-color: #fff;
    border: 1px solid #e9e9e9;
    position: relative;
    margin: 12px 0 35px;
    padding:0px;
    li{
        list-style: none;
        border-top: 1px solid #e9e9e9;
        padding: 0px 0px 0px 18%;
        font-size: 14px;
        font-weight: 400;
        color: grey;
        height: 40px;
        line-height: 41px;
        input{
            font-size: 30px;
            vertical-align: baseline;
        }
    }
    &::before{
        content:"";
        height:100%;
        position:absolute;
        top:0;
        border-left: 1px solid #ffd4d4;
        left: 70px;
    }
    &::after{
        content:"";
        height:100%;
        position:absolute;
        top:0;
        border-left: 1px solid #ffd4d4;
        left: 74px;
    }
`
export const Recipedirection = styled.div`
ul{
    counter-reset: headings;
    li{
        position: relative;
        margin-bottom: 15px;
        padding: 8px 14px;
        line-height: 24px;
        font-size:14px;
        color:#808080;
        list-style:none;
        counter-reset: headings;
        &::before{
            position: absolute;
            top: 3px;
            left: -34px;
            width: 34px;
            height: 34px;
            text-align: center;
            line-height: 32px;
            color: #999;
            font-weight: 700;
            font-size: 16px;
            background-color: #f4f4f4;
            counter-increment: headings;
            content: counter(headings, decimal);
            cursor: default;
        }
    }

}
`