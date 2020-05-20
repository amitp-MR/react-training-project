import React, { Component } from 'react';
import { FormWrapper, RightContent, LeftContent } from '../StyleComponent/style';
import Signup from './Signup';
import Receipe from '../../../Assets/images/receipe.jpeg';
import Signin from '../Form/Signin';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


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
                    <Route exact path="/"><Signup {...this.props}/></Route>
                    <Route path="/Signin" component={Signin} />
                    </Switch>
                    </Router>
                </RightContent>
            </FormWrapper>
        );
    }
}

export default Form;