import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = product => {
        this.setState({
            value: this.state.value + 1
        });
    }

    render() {
        return (
            <div className="mt-3">
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
                <button 
                    onClick={ () => this.handleIncrement({id:1}) } 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </div>
        );
    }
    
    getBadgeClasses(){
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? "warning" : "primary"
        return classes;
    }

    formateCount(){
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;