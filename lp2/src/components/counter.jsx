import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState){
        console.log('Counter - Updated');
        console.log('prevProps = ', prevProps);
        console.log('prevState = ', prevState);

        if(prevProps.counter.value !== this.props.counter.value){
            // Some Ajax call
        }
    }

    componentWillUnmount(){
        console.log('Counter - Unmount');
    }

    render() {
        console.log('Counter - Rendered');

        return (
            <div className="mt-3">
                <div className="row">
                    <div class="col-1">
                        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
                    </div>
                    <div class="col">
                        <button 
                            onClick={ () => this.props.onIncrement(this.props.counter) } 
                            className="btn btn-secondary btn-sm"
                        >
                            +
                        </button>
                        <button 
                            onClick={ () => this.props.onDecrement(this.props.counter) } 
                            className="btn btn-secondary btn-sm m-2"
                            disabled={this.props.counter.value === 0}
                        >
                            -
                        </button>
                        <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
                    </div>
                </div>
                
                
            </div>
        );
    }
    
    getBadgeClasses(){
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? "warning" : "primary"
        return classes;
    }

    formateCount(){
        const { value } = this.props.counter;   // Object destructuring
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;