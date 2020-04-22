import React from 'react';
import classes from './UI.css';

const Input = (props) => {
    let inputElement = null;

    switch(props.inputtype){
        case('input'):inputElement=<input className={ classes.inputElement } {...props}/>
        break;
        case('checkbox'):inputElement=<checkbox className={ classes.inputElement }  {...props}/>
        break;
        default:inputElement=<input className={ classes.inputElement }  {...props}/>
        
    }
    return (
        <div className={ classes.Input } >
            <label  className={ classes.Label } htmlFor="">{props.label}</label>
            { inputElement }
        </div>
    );
}

export default Input;