import React, { Component } from 'react'
import counter from '../reducers';
import { createStore } from 'redux'
const store = createStore(counter);
import Style from '../components/mainCss.css';

class Counter extends Component {
    constructor(props) {
        super();
        this.state = {counter: 0,alert: false}; // Setup initial state
        this.storeUpdated = this.storeUpdated.bind(this);
        store.subscribe(this.storeUpdated); // Subscribe to changes in the store
        this.onIncrement = this.onIncrement.bind(this);
    }

    storeUpdated() {
        console.log(store.getState(), typeof store.getState());
        if (store.getState() == 0) {
            console.log('inside');
            this.setState({
                alert: true
            })
        } else {
            console.log('inside 2');
            this.setState({
                counter: store.getState()
            });
        }
    }

    onIncrement() {
        store.dispatch({
            type: 'INCREMENT'
        });
    }

    onDecrement() {
        store.dispatch({
            type: 'DECREMENT'
        });
    }

    render() {
        console.log('this.state.error is ', this.state.error);
        if (!this.state.alert) {
            return (
                <div className={Style.incrementContainer}>
                    <div className={Style.counterData}>{this.state.counter}</div>
                    <button className={Style.increment} onClick={this.onIncrement}>INC</button>
                    <button className={Style.decrement} onClick={this.onDecrement}>DEC</button>
                </div>
            );
        } else {
            return (<div>Error Occured</div> );
        }
    }
}

export default Counter