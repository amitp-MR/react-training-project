import React from 'react';
import { Addtocartbtn, Ctabtnstyle } from '../StyleComponent/style';

export const Addbtn = (props) => {
    return(
        <Addtocartbtn onClick={props.onclick}>{props.children}</Addtocartbtn>
    );
}

export const Ctabtn = (props) => {
    return(
        <Ctabtnstyle onClick={props.onclick}>{props.children}</Ctabtnstyle>
    );
}
