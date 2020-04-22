import styled from 'styled-components';


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
            i{
                margin-left:5px;
            }
        }
        a:hover{
            transition: .4s;
        }

        ul{
            width: 160px;
            position: absolute;
            top: 71px;
            padding:0px;
            transition:.3s;
            height:0px;
            overflow:hidden;
            border-top:3px solid transparent;
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

