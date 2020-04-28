import React, { Component } from 'react';
import { FormWrapper, RightContent, LeftContent} from './FormStyle';
import Signup from './Signup';
import Receipe from '../../Assets/images/receipe.jpeg';


class Form extends Component{
    render(){
        return(
            <FormWrapper>
                <LeftContent>
                <img src={Receipe} alt=""/>
                </LeftContent>
                <RightContent>
                    <Signup />
                </RightContent>
            </FormWrapper>           
        );
    }
}

export default Form;