import React, { Component } from 'react';
import { FormWrapper, RightContent, LeftContent } from '../StyleComponent/style';
import Signup from '../../SignUp/SignUp';
import Receipe from '../../../Assets/images/receipe.jpeg';
import SignIn from '../../SignIn/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class Form extends Component {
    render() {
        return (
            <FormWrapper>
                <LeftContent>
                    <img src={Receipe} alt="" />
                </LeftContent>
                <RightContent>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={SignIn} />
                            <Route path="/Signup"><Signup {...this.props} /></Route>
                        </Switch>
                    </Router>
                </RightContent>
            </FormWrapper>
        );
    }
}

export default Form;