import React from 'react';
import { Inputblock, Label } from './Uistyle';
import classes from '../../../App.css';

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