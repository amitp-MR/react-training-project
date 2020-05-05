import React, { Component } from 'react';
import { SignupWrapper, SignupHeading, Signupbtn, Checkbtn, Forminput, Checkboxblock, Signupbtnblock } from '../Form/FormStyle';
import Input from '../../GlobalComponents/UI/Input';
import { NavLink } from 'react-router-dom';
import { Errorblock } from '../UI/Uistyle';
import { is } from '@babel/types';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: {
                    label: "Full Name",
                    elementType: "input",
                    ischeckbtn: "false",
                    elementConf: {
                        type: "text",
                        placeholder: "Name..."
                    },
                    value: "",
                    validation: {
                        required: "true"
                    },
                    valid: false,
                    checkStatus: false,
                    errorStatus: false,
                    error: "name is required"
                },
                email: {
                    label: "Email",
                    elementType: "input",
                    ischeckbtn: "false",
                    elementConf: {
                        type: "email",
                        placeholder: "Email..."
                    },
                    value: "",
                    validation: {
                        required: "true"
                    },
                    valid: false,
                    checkStatus: false,
                    errorStatus: false,
                    error: "valid email is required: ex@xyz"
                },
                username: {
                    label: "Username",
                    elementType: "input",
                    ischeckbtn: "false",
                    elementConf: {
                        type: "text",
                        placeholder: "Username..."
                    },
                    value: "",
                    validation: {
                        required: "true",
                        minLength: 6,
                        maxLength: 6
                    },
                    valid: false,
                    checkStatus: false,
                    errorStatus: false,
                    error: "user name is required"
                },
                password: {
                    label: "Password",
                    elementType: "input",
                    ischeckbtn: "false",
                    elementConf: {
                        type: "password",
                        placeholder: "********"
                    },
                    value: "",
                    validation: {
                        required: "true"
                    },
                    valid: false,
                    checkStatus: false,
                    errorStatus: false,
                    error: "password is required"
                },
                conpassword: {
                    label: "Repeat Password",
                    elementType: "input",
                    ischeckbtn: "false",
                    elementConf: {
                        type: "password",
                        placeholder: "********"
                    },
                    value: "",
                    validation: {
                        required: "true"
                    },
                    valid: false,
                    checkStatus: false,
                    errorStatus: false,
                    error: "repeat password is required"
                }
            }

        }
    }

    //validation function
    checkValidaty(value, rules) {
        let isValid = "true";

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputonfocusoutHandler = (event, inputIdentifier) => {
        if (this.state.formData[inputIdentifier].value.length !== 0) {
            this.setState(() => { this.state.formData[inputIdentifier].checkStatus = true 
                this.state.formData[inputIdentifier].errorStatus = false;
            });
        } else {
            this.setState(() => { 
                this.state.formData[inputIdentifier].checkStatus = false;
                this.state.formData[inputIdentifier].errorStatus = true;
            });
        }
        if(this.state.formData[inputIdentifier].label === "Username"){
            if(this.state.formData[inputIdentifier].value.length !== 6){
                this.setState(() => { 
                    this.state.formData[inputIdentifier].checkStatus = false;
                    this.state.formData[inputIdentifier].errorStatus = true;
                (this.state.formData[inputIdentifier].value.length === 0 ?  this.state.formData[inputIdentifier].error = "user name is required":this.state.formData[inputIdentifier].error = "user name length should be 6")
                });
            }
            else{
                this.setState(() => { 
                    this.state.formData[inputIdentifier].checkStatus = true;
                    this.state.formData[inputIdentifier].errorStatus = false;
                });
            }
        }

        const updatedFrom = { ...this.state.formData }
        this.setState({ formData: updatedFrom });
        
    }
    inputChangedHandler = (event, inputIdentifier) => {
         event.preventDefault();
         const updatedFrom = { ...this.state.formData }
         const updatedFromElement = { ...this.state.formData[inputIdentifier] }
         updatedFromElement.value = event.target.value;
         updatedFromElement.valid = this.checkValidaty(updatedFromElement.value, updatedFromElement.validation);
         updatedFrom[inputIdentifier] = updatedFromElement;
         this.setState({ formData: updatedFrom });
    }
    fotmSubmission = (event) => {
        event.preventDefault();
        const getFormData = {};
        for (let formElementIdentifier in this.state.formData) {
            getFormData[formElementIdentifier] = this.state.formData[formElementIdentifier].value;
        }
        let parseDate = JSON.stringify(getFormData);
        localStorage.setItem('getFormData', parseDate);

    }

    render() {
        const formElementArray = [];
        for (let key in this.state.formData) {
            formElementArray.push({
                id: key,
                config: this.state.formData[key]
            })
        }

        return (
            <SignupWrapper>
                <SignupHeading>Sign Up</SignupHeading>
                <form onSubmit={this.fotmSubmission}>
                    {
                        formElementArray.map((formEle, idx) => {

                            return (
                                <Forminput key={'tick' + formEle.id}>
                                    <Input
                                        label={formEle.config.label}
                                        key={formEle.id}
                                        elementType={formEle.config.elementType}
                                        elementConf={formEle.config.elementConf}
                                        value={formEle.config.value}
                                        ref={formEle.config.ref}
                                        invalid={!formEle.config.valid}
                                        focusout={(event) => this.inputonfocusoutHandler(event, formEle.id)}
                                        changed={(event) => this.inputChangedHandler(event, formEle.id)}

                                    />
                                    {
                                        (this.state.formData[formEle.id].errorStatus ? <Errorblock ><span className="errorMsg" >{this.state.formData[formEle.id].error}</span><i className="fa fa-exclamation-circle" aria-hidden="true"></i></Errorblock> : "")
                                    }{
                                        (this.state.formData[formEle.id].checkStatus ? <Checkbtn><i className="fa fa-check" aria-hidden="true"></i></Checkbtn> : "")
                                    }
                                </Forminput>
                            )
                        })
                    }
                    <div>
                        <Checkboxblock><input type="checkbox" /> <label htmlFor=""> I agree to the Terms of User</label></Checkboxblock>
                        <Signupbtnblock>
                            <Signupbtn >submit</Signupbtn>
                            <NavLink to="/Maincon">sign in</NavLink>
                        </Signupbtnblock>
                    </div>

                </form>
            </SignupWrapper>
        );
    }
}

export default Signup;

