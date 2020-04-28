import React, { Component } from 'react';
import { SignupWrapper, SignupHeading, Signupbtn, Checkbtn, Forminput, Checkboxblock, Signupbtnblock } from '../Form/FormStyle';
import Input from '../../GlobalComponents/UI/Input';
import { NavLink } from 'react-router-dom';

const dnone =  "none";
const dblock = "block";
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: {
                    label: "Full Name",
                    elementType: "input",
                    ischeckbtn: "false",
                    disp: dblock,
                    elementConf: {
                        type: "text",
                        placeholder: "Name..."
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false
                },
                email: {
                    label: "Email",
                    elementType: "input",
                    ischeckbtn: "false",
                    disp: dnone,
                    elementConf: {
                        type: "email",
                        placeholder: "Email..."
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false
                },
                username: {
                    label: "Username",
                    elementType: "input",
                    ischeckbtn: "false",
                    disp: dnone,
                    elementConf: {
                        type: "text",
                        placeholder: "Username..."
                    },
                    value: "",
                    validation: {
                        required: true,
                        minLength: 6,
                        maxLength: 6
                    },
                    valid: false
                },
                password: {
                    label: "Password",
                    elementType: "input",
                    ischeckbtn: "false",
                    disp: dnone,
                    elementConf: {
                        type: "password",
                        placeholder: "********"
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false
                },
                conpassword: {
                    label: "Repeat Password",
                    elementType: "input",
                    ischeckbtn: "false",
                    disp: dnone,
                    elementConf: {
                        type: "password",
                        placeholder: "********"
                    },
                    value: "",
                    validation: {
                        required: true
                    },
                    valid: false
                }
            }

        }
    }

    //validation function
    checkValidaty(value, rules) {
        let isValid = true;

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

    inputChangedHandler = (event, inputIdentifier) => {
        event.preventDefault();
        const updatedFrom = { ...this.state.formData }
        const updatedFromElement = { ...this.state.formData[inputIdentifier] }
        updatedFromElement.value = event.target.value;
        updatedFromElement.valid = this.checkValidaty(updatedFromElement.value, updatedFromElement.validation);
        updatedFrom[inputIdentifier] = updatedFromElement;
        this.setState({ formData: updatedFrom })

    }

    inputonfocusoutHandler = (event, inputIdentifier) => {
        event.preventDefault();
        if (event.target.value !== '') {
            this.setState(()=>{
                this.setState.disp=dblock;
            })
        }
    }
    fotmSubmission = (event) => {
        event.preventDefault();
        const getFormData = {};
        for (let formElementIdentifier in this.state.formData) {
            getFormData[formElementIdentifier] = this.state.formData[formElementIdentifier].value;
        }
        let parseDate = JSON.stringify(getFormData);
        console.log(parseDate);
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
                                        changed={(event) => this.inputChangedHandler(event, formEle.id)}
                                        focusout={(event) => this.inputonfocusoutHandler(event, formEle.id)}
                                    />
                                    <Checkbtn style={{ display: this.state.disp }}>
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                    </Checkbtn>
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

