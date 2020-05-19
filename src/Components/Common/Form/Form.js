import React, { Component } from 'react';
import { FormWrapper, RightContent, LeftContent } from '../StyleComponent/style';
import Signup from './Signup';
import Receipe from '../../../Assets/images/receipe.jpeg';


class Form extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <FormWrapper>
                <LeftContent>
                    <img src={Receipe} alt="" />
                </LeftContent>
                <RightContent>
                    <Signup {...this.props}/>
                </RightContent>
            </FormWrapper>
        );
    }
}

export default Form;