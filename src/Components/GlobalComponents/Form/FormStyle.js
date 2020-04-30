import styled from 'styled-components';


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
        background: -webkit-linear-gradient(bottom,rgba(232,81,158,.8),rgba(199,127,242,0.93));
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