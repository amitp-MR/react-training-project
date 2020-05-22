import React from 'react';
import { LoginBtn, Addtocartbtn, Ctabtnstyle, NotReg } from '../StyleComponent/CtaStyle';

export const Addbtn = (props) => {
    return (
        <Addtocartbtn onClick={props.onclick}>{props.children}</Addtocartbtn>
    );
}

export const Ctabtn = (props) => {
    return (
        <Ctabtnstyle onClick={props.onclick}>{props.children}</Ctabtnstyle>
    );
}

export const LoginButton = (props) => {
    return (
        <LoginBtn onClick={props.onclick}>{props.children}</LoginBtn>
    );
}

export const Reg = (props) => {
    return (
        <NotReg className="reg" onClick={props.onclick}>{props.children}</NotReg>
    );
}
