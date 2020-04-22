import React, { Component } from 'react';
import { SignupWrapper } from '../Form/FormStyle';
import Input from '../../GlobalComponents/UI/Input';

class Signup extends Component{
    render(){
        return(
            <SignupWrapper>
                <span>Sign Up</span>
                <Input />
            </SignupWrapper>
        );
    }
}

export default Signup;