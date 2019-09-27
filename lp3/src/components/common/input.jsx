import React from 'react';

const Input = ({name, label, value, onChange}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            { /* <input ref={this.username} autoFocus type="text" className="form-control" id="username" placeholder="Enter Username" /> */ }
            <input 
                onChange={onChange}
                value={value} 
                name={name}
                autoFocus 
                type="text" 
                className="form-control" 
                id={name} 
                placeholder="Enter Username" 
            />
        </div>
    );
}
 
export default Input;