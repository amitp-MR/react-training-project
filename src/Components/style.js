import styled from 'styled-components';

export const Bann = styled.div`
    height:490px;
    background-color:fff;
`

export const BannInnerWrap = styled.div`
    height:415px;
    width:100%;
    background-color:#404040;
`
export const BackDrop = styled.div`
    background-color:rgba(0,0,0,0.3);
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
        a{
            text-decoration:none;
            color:#fff;
        }
    }
    p{
        a{
            color:#fff;
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
    nav{
        margin:0 auto;
        width:70%;
        overflow:hidden;
    ul{
        margin:0;
        padding:0;
        display: inline-flex;
        li{
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