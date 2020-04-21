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
background-color:${props => props.buttonTrue};
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
    width:75%;
    margin:0 auto;
    height:100%;
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