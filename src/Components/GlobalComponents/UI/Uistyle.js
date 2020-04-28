import styled from 'styled-components';


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
    border:1px solid #c80000;
    display:none;
`
