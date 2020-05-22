import styled from 'styled-components';

export const Addtocartbtn = styled.div`
        background-color: #8dc63f;
        display:inline-block;
        margin: 0 0 0 25px;
        padding: 8px 15px 8px 52px;
        cursor: pointer;
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
        font: inherit;
        vertical-align: top;
        i{
            position: absolute;
    left: 0;
    width: 40px;
    background: rgba(0,0,0,.06);
    height: 40px;
    top: 0;
    text-align: center;
    line-height: 40px;

        }

`

export const Ctabtnstyle = styled.div`
    background-color: #f2f2f2;
    margin:0px 2px;
    border-bottom: 1px solid #fff;
    color: #888;
    font-weight: normal;
    font-family: "Open Sans", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform:capitalize;
    font-size:14px;
    display: block;
    letter-spacing: .8px;
    outline: none;
    padding: 0 20px;
    text-decoration: none;
    transition: all .2s ease-in-out;
    line-height: 42px;
    cursor:pointer;
    &:hover {
        transition: all .5s ease-in-out;
        background-color: #e6e5e5;
    }
`

export const NotReg = styled.div`
    line-height: 47px;
    padding: 0px 10px;
    position: relative;
    transition: all .5s ease-in-out;
.reg{
    content:"";
    width:10px;
    height:10px;
}
a{
    text-decoration:none;
}
 &:hover {
    transition: all .5s ease-in-out;
    background-color: #e6e5e5;
}

`
export const LoginBtn = styled.button`
    padding: 0 20px;
    min-width: 150px;
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

