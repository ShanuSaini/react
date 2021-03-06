import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
    state = {
        account: { username: '', password: '' }
    };
    username = React.createRef();

    componentDidMount(){
        // this.username.current.focus();
        // autoFocus attribute in username input field
    }

    handleSubmit = e => {
        e.preventDefault();
        
        // Call Server 
        const username = this.username.current.value;
        console.log('Username = ' + username);
    }

    handleChange = ({ currentTarget: input }) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() { 
        const { account } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Input 
                    name="username"
                    value={account.username}
                    label="Username"
                    onChange={this.handleChange}
                />
                <Input 
                    name="password"
                    value={account.password}
                    label="Password"
                    onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        );
    }
}

export default LoginForm;