import React from 'react';

import Styles from './mainCss.css';

import { createStore } from 'redux'
import Counter from '../reduxComponents'
import counter from '../reducers';

const store = createStore(counter);
class Main extends React.Component {
    render() {
        return(
            <div className={Styles.mainContent}>
                <Counter />
            </div>
        )
    }
}


export default Main;