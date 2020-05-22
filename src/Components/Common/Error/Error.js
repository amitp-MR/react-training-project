import React from 'react';
import {Errorpage, ErrorTitle, ErrorMessage, ErrorLink} from '../../Common/StyleComponent/ErrorStyle';


const Error = (props) => {
    return (
        <Errorpage>
            <ErrorTitle>404</ErrorTitle>
            <ErrorMessage>OoErrorMessages! Something is wrong.</ErrorMessage>
            <ErrorLink > Go back in initial page, is better.</ErrorLink>
        </Errorpage>
    )
}

export default Error;
