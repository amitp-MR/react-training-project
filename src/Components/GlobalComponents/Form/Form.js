import React, { Component } from 'react';
import { FormWrapper, RightContent, LeftContent} from './FormStyle';
import Signup from './Signup';


class Form extends Component{
    render(){
        return(
            <FormWrapper>
                <LeftContent>
                right
                </LeftContent>
                <RightContent>
                    <Signup />
                </RightContent>
            </FormWrapper>           
        );
    }
}

export default Form;