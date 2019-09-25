import React, { Component } from 'react';

class LoginForm extends Component {
    render() { 
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="email" className="form-control" id="username" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        );
    }
}

export default LoginForm;