import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import * as actions from './../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label='Email' placeholder='email@domain.org' onChangeText={this.onEmailChange.bind(this)} />
                </CardSection>
                <CardSection>
                    <Input isPassword label='Password' placeholder='password' />
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null, actions)(LoginForm);