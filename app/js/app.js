console.log("Inside app.js");

import React from 'react';
import ReactDom from 'react-dom';

import Main from './components/Main.js';
ReactDom.render(<Main />,document.getElementById('app'));

