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

    handleChange = e => {
        const account = {...this.state.account};
        account.username = e.currentTarget.value;
        this.setState({ account });
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    { /* <input ref={this.username} autoFocus type="text" className="form-control" id="username" placeholder="Enter Username" /> */ }
                    <input 
                        onChange={this.handleChange}
                        value={this.state.account.username} 
                        autoFocus 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="Enter Username" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        );
    }
}

export default LoginForm;