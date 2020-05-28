import styled, { css }from 'styled-components';


export const Wrapper = styled.div`
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
`
export const Head = styled.div`
        width: 100%;
        background: #fff;
        width: 100%;
        min-height: 74px;
`
export const HeaderLogo = styled.div`
        width: 160px;
        line-height: 70px;
        img{
            vertical-align:middle;
        }
`
export const HeaderNav = styled.nav`
    li{
        display: inline-block;
        padding: 0px 15px 0px 0px;
        vertical-align: -webkit-baseline-middle;
        a{
            cursor:pointer;
            color: #505050;
            font-weight: 600;
            font-size: 14px;
            vertical-align: middle;
            padding: 28px 16px 28px;
            border-bottom: 3px solid transparent;
            transition: .4s;
            color: #505050;
            font-weight:100;
            text-decoration:none;
            i{
                margin-left:5px;
            }
        }
        a:hover{
            transition: .4s;
        }

        ul{
            max-width: 160px;
            position: absolute;
            top: 71px;
            padding:0px;
            transition:.3s;
            height:0px;
            overflow:hidden;
            border-top:3px solid transparent;
            z-index: 10;
            li{
                text-align:center;
                border-bottom:.5px solid #c1c1c1;
                height: 40px;
                background: #404040;
                width:100%;
                a{
                    text-align:center; 
                    border:none;  
                    text-decoration: none;
                    font-size: 13px;
                    color: #9c9c9c;
                    font-weight: 100;
                }
                a:hover{
                    border:none;    
                }
            }
        }
    }
    .navlist:hover .dp{
                border-top:3px solid #8dc63f;
                height:150px;
                transition: .3s;
    }
    .Subnavlist{
        font-size:12px;
        color:#fff;
        padding: 10px;
    }
`
//footer styling
export const FooterWrapper = styled.div`
        clear: both;
        width:100%;
        background: #333;
        color: #b8b8b8;
        margin: 0;
        .heading{
            font-size: 16px;
            font-weight: 700;
            color: #fff;
            background-color: #333;
            text-transform: none;
        }
        ul{
            padding:0px;
            li{
                list-style:none;
                i{
                    color:#fff;
                    margin-right:5px;
                }
            }
        }
        .copyRight{
            background: #2a2a2a;
            color: #b0b0b0;
            padding: 18px 0;
            height:60px;
            p{
                font-size:14px;
                width:70%;
                margin:0 auto;
            }
        }
    `
export const FooterContent = styled.div`
        display:flex;
        justify-content: space-between;
        width: 70%;
        margin: 0 auto;
        padding: 35px 0 40px;
    .section1,.section4{
        width:280px;
    }
    p, li{
        font-size:14px;
        line-height:24px;
    }
    .subs{
        position:relative;
    }
    .subBtn{
        background-color: #8dc63f;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
        float: right;
        position: relative;
        padding: 12px;
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
        background-color: #3a3a3a;
        border: 1px solid #474747;
        outline:none;
    }
`



export const Inputblock = styled.div`
        box-sizing: border-box;
        width: 100%;
        border-bottom: 2px solid #dbdbdb;
        margin-bottom: 45px;
        position: relative;
        input{
            outline: none;
            display: block;
            width: 100%;
            height: 50px;
            background: 0 0;
            font-family:sans-serif;
            font-size: 22px;
            color: #555;
            line-height: 1.2;
            padding: 0 2px;
            border:0;
            overflow:hidden;
        }
        
        input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #ccc;
            opacity: 1; 
          }
          input:focus::-webkit-input-placeholder {
            opacity: 0;
        }
          .line {
            width:0%;
            display: inline-block;
            position: absolute;
            height: 2px;
            background: linear-gradient(45deg,#d5007d,#e53935);
            bottom: -2px;
            transition:.6s;
        }
        input:focus + .line{
            width:100%;
            transition:.6s;
        }
       
`


export const Label = styled.label`
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: block;
        font-size: 18px;
        color: #999;
        line-height: 1.2;
        text-transform: capitalize;
        margin-bottom: 5px;
`
export const Errorblock = styled.span`
        position: absolute;
        right: 5%;
        color: #c80000;
        font-size: 18px;
        top: 50%;
        font-size: 14px;
        &:hover .errorMsg{
            opacity:1;
            transition:.3s;
        }
        .errorMsg{
            opacity:0;
            transition:.3s;
            transition: .3s;
            border: 1px solid;
            padding: 0px 30px 0px 5px;
            position: relative;
            left: 22px;
        }
`




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
        overflow:hidden;
`
export const BackDrop = styled.div`
        background-color:rgba(0,0,0,0.4);
        width:100%;
        height:100%;
        overflow:hidden;
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

export const CardWrapper = styled.div`
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
export const Recipeingredients = styled.ul`
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
export const Sidebar = styled.div`
    width:220px;
    margin: 0px 10px;
    .subs{
        top:0px;
        width:220px;
    }
`

export const Shopheader = styled.div`
    background-color: #f6f6f6;
    min-height: 88px;
    margin: 0 0 40px;
    div{
        width:75%;
        margin:0 auto;
        display:flex;
        h3{
            font-size: 24px;
            font-weight: 500;
            float: left;
            width: 100%;
            margin: 29px 0 0;
            color: #606060;
        }
        p{
            width: 460px;
            float: right;
            font-size: 13px;
            margin-top: 30px;
            font-weight: 500;
            color: #909090;
            background: 0 0;
            display: flex;
            justify-content: flex-end;
            word-spacing: 2px;
            span{
               
                a{
                    color: gray;
                    font-weight: 600;
                    cursor:pointer;
                    text-decoration:none;
                    padding:0 5px;
                }
            }
        }
    }
`
export const Shopcontent = styled.div`
            width:75%;
            margin:0 auto;
            display:flex;
`
export const Headline = styled.div`
            height:46px;
            font-size: 20px;
            background-color: #fff;
            padding-right: 10px;
            z-index: 5;
            color: #606060;
            font-weight: 500;
            font-family: "Open Sans", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
`
export const CheckoutBox = styled.div`
            background-color: #f8f8f8;
            padding: 8px 20px 16px;
            
`
export const AboveSec = styled.div`
            height:101px;
            border-bottom: 1px solid #e5e5e5;
            padding: 15px 0;
            display: block;
            overflow: hidden;
            display:flex;
            justify-content: space-between;

`
export const Subsec = styled.div`
        width: 70px;
        height: 70px;
        overflow: hidden;
        img{
            width:100%;
        }
`
export const Pricesec = styled.div`
        width: 90px;
        height: 70px;
        overflow: hidden;
        a{
            margin:0;
            color: #606060;
            font-size: 14px;
            font-weight: 600;
        }
        p{
            color: #909090;
            font-size: 14px;
            margin:0;
        }
`
export const Belowsec = styled.div`
            border-bottom: 1px solid #e5e5e5;
            display: block;
            overflow: hidden;
            justify-content: space-between;
            p{
                margin:14px 0px;
                font-weight: 600;
                color: #707070;
                font-size:14px;
                span{
                    font-weight:100;
                }
            }


`
export const Viewcart = styled.div`
a{
    cursor: pointer;
    height:38px;
    padding: 7px 14px;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 13px;
    outline: none;
    overflow: hidden;
    position: relative;
    z-index: 10;
    color: #fff;
    background-color: #a0a0a0;
    border: none;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -ms-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    text-decoration: none;
    width: 100%;
    text-align: center;
    line-height: 25px;
}
&:hover a{
    background-color: #555!important;
}

`
export const Checkout = styled.div`
    a{
        background-color: #8dc63f;
        height:38px;
        width:100%;
        text-align:center;
        text-decoration:none;
        cursor: pointer;
        padding: 7px 14px;
        display: inline-block;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 13px;
        outline: none;
        overflow: hidden;
        position: relative;
        z-index: 10;
        color: #fff;
        border: none;
        -webkit-transition: all .2s ease-in-out;
        -moz-transition: all .2s ease-in-out;
        -ms-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
        line-height: 25px;
    }
    &:hover a{
        background-color: #555!important;
    }

`
export const Shopgallery = styled.div`
    width:75%;
`
export const Cart = styled.div`
            margin-top:30%;

`
export const ProductView = styled.div`
            display:flex;
            flex-wrap: wrap;
`
export const Product = styled.div`
           margin: 23px 20px 0 0;
           width:213px;
           height:323px;
           overflow:hidden;
`
export const ImageBox = styled.div`
          overflow:hidden;
          position:relative;
          img{
              width:100%;
          }
          span{
            position:absolute;
            background-color: #8dc63f;
            color: #fff;
            text-align: center;
            font-size: 14px;
            width: 42px;
            height: 42px;
            display: block;
            bottom: -43px;
            right:0;
            transition:.3s;
            cursor:pointer;
            &:hover{
                background-color: #555555;
            }
            i{
                line-height:40px;
            }
          }
          &:hover span{
            bottom: 0px;
            transition:.3s;
          }
`
export const Captionbox = styled.div`
        padding: 16px 0 15px;
        text-align: center;
        background-color: #f8f8f8;
        height:101px;
        h5{
            margin:0;
            color: #707070;
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
        }
        p{
            margin:0;
            font-size: 16px;
            font-weight: 700;
            color: #606060;
            padding: 1px 0 5px;
            display: block;
        }
        span{
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            color: #aaa;
        }
        
`





export const Cardgallery = styled.div`
    width:75%;
    flex-wrap: wrap;
    display:flex;
    height:100%;
    float:left;
`

export const RecipeContainer = styled.div`
        width: 220px;
        height: 400px;
        background-color: #f8f8f8;
        overflow:hidden;
        margin-right:10px;
        margin-top:20px;
        position:relative;
        .viewrecipe{
            position:absolute;
            width:100%;
            height:100%;
            transition:.4s;
            cursor:pointer;
            a{
                display:inline-block;
                background-color: rgba(51,51,51,.8);
                color: #fff;
                font-weight: 700;
                text-transform: uppercase;
                font-size: 13px;
                padding: 8px 12px;
                text-decoration:none;
                text-align:center;
                position: absolute;
                transform: translate(50%, 200%);
                transition:.4s;
                opacity:0;
            }
        }
        .viewrecipe:hover{
            background-color: rgba(0,0,0,0.5);
            transition:.4s;
            a{
                transform: translate(50%, 300%);
                opacity:1;
            }
        }
`
export const ImgContainer = styled.div`
        width: 100%;
        height: 229px;
        overflow:hidden;
        position:relative;
        img{
            width: 100%;
            height: 100%;
        }
`
export const TextContainer = styled.div`
    padding: 20px 25px;
    a{
        font-size: 19px;
        font-family: arvo;
        color: #606060;
        display: block;
        line-height: 26px;
        padding:0px 0px 15px;
        border-bottom: 1px solid #e5e5e5;
    }
    div{
        span{
            color: #909090;
            font-weight: 700;
            font-size: 12px;
            text-transform: uppercase;
            float: right;
            margin-left: 15px;
            font-family:"open-sans";
        }
    }
    .contentrating{
        display:flex;
        justify-content:space-between;
        span{
            margin-left: 0px;
        }
        .contentstars{
            color: rgb(255, 199, 65);
        }
    }
    
`

export const Gridgallery = styled.div`
    margin-top: 20px;
    width:75%;
    flex-wrap: wrap;
    display:flex;
    height:100%;
    float:left;
`

export const GridContainer = styled.div`
       width:100%;
       height:285px;
       overflow:hidden;
       margin: 0 20px 20px 0;
`
export const GridimgContainer = styled.div`
        width:33%;
        height:100%;
        display:inline-block;
        overflow:hidden;
        position: relative;
        img{
            width:100%;
            height:100%;
        }
        .viewrecipe{
            position:absolute;
            width:100%;
            height:100%;
            transition:.4s;
            cursor:pointer;
            a{
                display:inline-block;
                background-color: rgba(51,51,51,.8);
                color: #fff;
                font-weight: 700;
                text-transform: uppercase;
                font-size: 13px;
                padding: 8px 12px;
                text-decoration:none;
                text-align:center;
                position: absolute;
                transform: translate(50%, 200%);
                transition:.4s;
                opacity:0;
            }
        }
        .viewrecipe:hover{
            background-color: rgba(0,0,0,0.5);
            transition:.4s;
            a{
                transform: translate(50%, 300%);
                opacity:1;
            }
        }
`
export const GridContentContainer = styled.div`
        width:67%;
        height:100%;
        display:inline-block;
        float: right;
        background-color: #f8f8f8;
        padding: 33px 35px 29px;
        div{
            h3{
                font-size: 22px;
                line-height: 26px;
                margin: 0;
                padding: 0 0 13px;
                border-bottom: none;
                font-family: arvo;
                a{
                    color: #606060;
                    display: block;
                    line-height: 28px;
                    text-decoration:none;
                }
            }
            p{
                border-bottom: 1px solid #e5e5e5;
                margin: 0 0 15px;
                padding: 0 0 22px;
                line-height: 24px;
                font-size:14px;
                color:#808080;
            }
        }
        p{
                display: flex;
                justify-content: space-between;
                span{
                    color: #909090;
                    text-transform: uppercase;
                    font-size:12px;

                }
                .contentstars{
                    color: rgb(255, 199, 65);
                }
        }
`



export const FormWrapper = styled.div`
    display:flex;
    height:940px;
`
export const LeftContent = styled.div`
    background-color:grey;
    width:60%;
    overflow:hidden;
    position:relative;
    &::before{
        content:"";
        width:100%;
        height:100%;
        position:absolute;
    }
    img{
        width:100%;
        height:100%;
    }
`
export const RightContent = styled.div`
    width:40%;
    box-sizing:border-box;
    padding:72px 50px 50px;
`
export const SignupWrapper = styled.div`

    
`
export const SignupHeading = styled.span`
    display: block;
    width: 100%;
    font-family: Poppins-Bold;
    font-size: 39px;
    color: #333;
    line-height: 1.2;
    text-align: left;
    padding-bottom: 59px;
`
export const Signupbtnblock = styled.div`
    display: flex;
    justify-content:space-between;
`

export const Signupbtn = styled.button`
    padding: 0 20px;
    min-width: 244px;
    height: 50px;
    font-size: 16px;
    color: #fff;
    line-height: 1.2;
    outline:none;
    border:0;
    border-radius: 30px;
    background: -webkit-linear-gradient(top,#e8519e,#c77ff2);
    cursor:pointer;
    &:hover{
        background: -webkit-linear-gradient(top,#c77ff2,#e8519e);
    }
`
export const Checkbtn = styled.div`
    position: absolute;
    bottom: 15px;
    right: 0;
    font-size: 20px;
    color: #00ad5f;

`
export const Forminput = styled.div`
    position:relative;
`
export const Checkboxblock = styled.div`
    padding-bottom:33px;
`

export const Productdetailwrapper = styled.div`
    width:75%;
    margin:0 auto;
    overflow:hidden;
`
export const Productview = styled.div`

`
export const Productimg = styled.div`
    width:461px;
    height:397px;
    overflow:hidden;
    display:inline-block;
    img{
        width:100%;
    }
`
export const Productcaption = styled.div`
    width:460px;
    height:309px;
    overflow:hidden;
    padding-left: 20px;
    display:inline-block;
    vertical-align: top;
`
export const Producttitle = styled.div`
    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
    color: #606060;
    font-family: "Open Sans", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
`
export const Productprice = styled.div`
    padding: 0 0 20px;
    border-bottom: 1px solid #ebebeb;
    color: #888;
    font-weight: 500;
    font-size: 22px;
    margin: 3px 0 0;
`
export const Productdescription = styled.div`
    line-height: 24px;
    border-bottom: 1px solid #ebebeb;
    padding: 20px 0;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    color: #808080;
`
export const Buttonblock = styled.div`

`
export const IncrementBtn = styled.div`
display:inline-block;
    span{
        background: silver;
        display:inline-block;
        color: #fff;
        border: none;
        font-family: fontawesome;
        cursor: pointer;
        width: 40px;
        height: 40px;
        font-size: 13px;
        outline: 0;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: all .2s ease-in-out;
        -moz-transition: all .2s ease-in-out;
        -o-transition: all .2s ease-in-out;
        -ms-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
        text-align:center;
        line-height: 40px;
        }
        p{
            display:inline-block;
            width: 40px;
        height: 40px;
        text-align:center;
        background-color: #f8f8f8;
        border-color: #f8f8f8;
        margin:0;
        line-height: 37px;
        }
`


export const RelatedProducts = styled.div`
    display: flex;
`
export const Productdes = styled.div`

`
export const Btnblock = styled.div`
display: flex;
`

export const Descrptblock = styled.div`
margin: 0 0 15px 0;
line-height: 24px;
font-size:14px;
color:#808080;
`
export const Browserecipestyle = styled.div`

`
export const BrowseGallery = styled.div`
    width:75%;
    margin:0 auto;
    display: flex;
    flex-wrap: wrap;
`
export const SearchBox = styled.div`
    width:75%;
    margin:0 auto;
    display: flex;
    flex-wrap: wrap;
`
export const Title = styled.div`
font-size: 24px;
font-weight: 500;
float: left;
width: 100%;
color: #606060;
`

export const SpinnerWrapper = styled.div`

`
export const Spinner = styled.div`
    border: 0.2em solid transparent;
    border-top-color: currentcolor;
    border-radius: 50%;
    animation: 1s loader-05 linear infinite;
    position: absolute;
    
    display: inline-block;
    width: 7em;
    height: 7em;
    color: #8dc63f;
    vertical-align: middle;
    pointer-events: none;
    top:50%;
    left:45%;

@keyframes loader-05 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
`


