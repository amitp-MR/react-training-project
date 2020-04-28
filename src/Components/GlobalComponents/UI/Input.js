import React from 'react';
import { Inputblock, Label, Errorblock } from './Uistyle';

const Input = (props) => {

    let inputElement = null;

    switch(props.elementType){
        case('input'):
            inputElement=<input  
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
            onChange={ props.changed }
            />
        break;
        
    }
    return (
        <Inputblock className="Inputblock">
            <Label  className="Label">{props.label}</Label>
            { inputElement }
            <span className='line'></span>
            <Errorblock>{props.label} is required <i className="fa fa-exclamation-circle" aria-hidden="true"></i></Errorblock>
        </Inputblock>
    );
}

export default Input;