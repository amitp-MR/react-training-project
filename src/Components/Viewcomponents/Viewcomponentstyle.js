import styled from 'styled-components';

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