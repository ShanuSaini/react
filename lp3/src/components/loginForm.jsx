import React, { Component } from 'react';

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
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    { /* <input ref={this.username} autoFocus type="text" className="form-control" id="username" placeholder="Enter Username" /> */ }
                    <input 
                        onChange={this.handleChange}
                        value={account.username} 
                        name="username"
                        autoFocus 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="Enter Username" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        onChange={this.handleChange}
                        value={account.password}
                        name="password"
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter Password" 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        );
    }
}

export default LoginForm;