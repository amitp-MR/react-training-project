import React from 'react';
import { Inputblock, Label } from '../StyleComponent/style';
import classes from '../../../Container/App/App.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
   
    switch(props.elementType){
        case('input'):
        
            inputElement=<input
            className={inputClasses.join(' ')}  
            {...props.elementConf}
            value={props.value}
            ref={props.ref}
            autoComplete="off"
            onChange={ props.changed }
            onBlur={props.focusout}
            />
        break;
        case('checkbox'):
            inputElement=<checkbox 
            {...props.elementConf}
            value={props.value}
            onChange={ props.changed }
            />
        break;
        default:
      
    
    }
    if(props.invalid){
        inputClasses.push('invalid');
    }
    return (
        <Inputblock className="Inputblock">
            <Label  className="Label">{props.label}</Label>
            { inputElement }
            <span className='line'></span>
        </Inputblock>
    );
}

export default Input;