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
            i{
                margin-left:5px;
            }
        }
        a:hover{
            border-bottom:3px solid#8dc63f;
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
`