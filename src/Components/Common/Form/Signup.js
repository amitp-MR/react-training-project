import React, { Component } from 'react';
import { SignupWrapper, SignupHeading, Signupbtn, Checkbtn, Forminput, Signupbtnblock } from '../StyleComponent/style';
import Input from '../Input/Input';
import { Errorblock } from '../StyleComponent/style';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
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
                    onvalid: false,
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
        event.preventDefault();
        const { formData } = this.state;
        if (formData[inputIdentifier].value.length !== 0) {
            this.setState(() => {
                formData[inputIdentifier].checkStatus = true;
                formData[inputIdentifier].errorStatus = false;
            });
        } else if(formData[inputIdentifier].value== "" ){
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
        if (formData[inputIdentifier].label === "Repeat Password") {
            if (event.target.value !== formData['password'].value || event.target.value === "") {
                this.setState(() => {
                    formData[inputIdentifier].checkStatus = false;
                    formData[inputIdentifier].errorStatus = true;
                    (formData[inputIdentifier].value.length === 0 ? formData[inputIdentifier].error = "Repeat password is required" : formData[inputIdentifier].error = "password did not match")
                });
            }
            else {
                this.setState(() => {
                    formData[inputIdentifier].checkStatus = true;
                    formData[inputIdentifier].errorStatus = false;
                });
            }
        }
        if (formData[inputIdentifier].errorStatus) {
            this.setState({
                isValid:true
            })
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
        const getFormele ={};
        for (let formElementIdentifier in this.state.formData) {
            getFormData[formElementIdentifier] = this.state.formData[formElementIdentifier].value;
            getFormele[formElementIdentifier] = this.state.formData[formElementIdentifier].errorStatus;
        }
        console.log(getFormele)
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
                <form onSubmit={(event) => this.fotmSubmission(event)}>
                    {
                        formElementArray.map((formEle, idx) => {

                            return (
                                <Forminput key={'tick' + formEle.id}>
                                    <Input
                                        autocomplete="off"
                                        label={formEle.config.label}
                                        key={formEle.id}
                                        name={formEle.id}
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
                            <Signupbtn disabled={this.state.isValid}>
                                Submit 
                            </Signupbtn> 
                            {!this.state.isValid ? 
                            <Link to="/Signin">Signin  
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </Link> : ""}
                        </Signupbtnblock>


                    </div>

                </form>
            </SignupWrapper>
        );
    }
}

export default Signup;

