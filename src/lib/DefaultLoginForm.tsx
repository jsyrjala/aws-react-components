import * as React from 'react';
import {LoginForm} from './LoginForm';

namespace DefaultLoginForm {
    export interface State {
        username : string,
        password : string;
    }
}

export class DefaultLoginForm extends LoginForm <LoginForm.Props, DefaultLoginForm.State> {

    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        }

        this.handleUsername = this
            .handleUsername
            .bind(this);
        this.handlePassword = this
            .handlePassword
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleUsername(e : React.ChangeEvent<HTMLInputElement>) {
        this.setState({username: e.target.value});
    }

    handlePassword(e : React.ChangeEvent<HTMLInputElement>) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this
            .props
            .loginHandler(this.state.username, this.state.password);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.username}
                    name="username"
                    placeholder="Username"
                    onChange={this.handleUsername}/>
                <input
                    type="password"
                    value={this.state.password}
                    name="password"
                    placeholder="Password"
                    onChange={this.handlePassword}/>
                <input type="submit"/>
            </form>
        );
    }
}