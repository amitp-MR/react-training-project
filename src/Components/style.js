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
    width:70%;
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
    .active{
        background-color:#8dc63f;
        span{
            color:#fff;
        }
    }
    nav{
        margin:0 auto;
        width:70%;
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
            width:225px;
            display:flex;
            list-style-type: none;
            justify-content: center;
            align-items: center;
            span{
                color:#808080;
                display:block;
            }
        }
        li:hover{
            color:#fff;
            background:#8dc63f;
            span{
                color:#fff;
            }
        }
    }
}
`
export const Wrapper = styled.div`
    display:block;
    width:70%;
    margin:0 auto;
    height:100%;
`
export const Cardgallery = styled.div`
    width:75%;
    flex-wrap: wrap;
    display:flex;
    height:100%;
    float:left;
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

export const RecipeContainer = styled.div`
        width: 210px;
        height: 400px;
        background-color: #f8f8f8;
        overflow:hidden;
        margin-right:10px;
        margin-top:20px;
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
    
`