import React, { Component } from 'react';
import { SignupWrapper, SignupHeading, Signupbtn, Checkbtn, Forminput, Signupbtnblock } from '../StyleComponent/style';
import Input from '../Input/Input';
import { Errorblock } from '../StyleComponent/style';
import { Link } from 'react-router-dom';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
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
        event.preventDefault();
        const { formData } = this.state;
        if (formData[inputIdentifier].value.length !== 0) {
            this.setState(() => {
                formData[inputIdentifier].checkStatus = true;
                formData[inputIdentifier].errorStatus = false;
            });
        } else {
            this.setState(() => {
                formData[inputIdentifier].checkStatus = false;
                formData[inputIdentifier].errorStatus = true;
            });
        }
        if (formData[inputIdentifier].label === "Username") {
            if (formData[inputIdentifier].value.length !== 6) {
                this.setState(() => {
                    formData[inputIdentifier].checkStatus = false;
                    formData[inputIdentifier].errorStatus = true;
                    (formData[inputIdentifier].value.length === 0 ? formData[inputIdentifier].error = "user name is required" : formData[inputIdentifier].error = "user name length should be 6")
                });
            }
            else {
                this.setState(() => {
                    formData[inputIdentifier].checkStatus = true;
                    formData[inputIdentifier].errorStatus = false;
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
        let curruser = this.state.formData.username.value;
        let curpass = this.state.formData.password.value;

        const localdata = JSON.parse(localStorage.getItem("getFormData"));
        if(curruser === localdata.username && curpass === localdata.password){
            this.props.history.push('/Home');
        }
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
                <SignupHeading>Sign In</SignupHeading>
                <form onSubmit={(event) => this.fotmSubmission(event)}>
                    {
                        formElementArray.map((formEle, idx) => {

                            return (
                                <Forminput key={'tick' + formEle.id}>
                                    <Input
                                        autocomplete="off"
                                        label={formEle.config.label}
                                        key={formEle.id}
                                        elementType={formEle.config.elementType}
                                        elementConf={formEle.config.elementConf}
                                        value={formEle.config.value}
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
                      
                        
                        <Signupbtnblock>
                            <Signupbtn>Login</Signupbtn><Link to="/">Not Registered</Link>
                        </Signupbtnblock>
                        
                        
                    </div>

                </form>
            </SignupWrapper>
        );
    }
}

export default Signin;

