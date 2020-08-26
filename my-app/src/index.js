import React, { Component } from 'React';
import ReactDOM from 'react-dom';
import nav_bar from './navbar.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

    ReactDOM.render(<App />, document.getElementById('root'));


    render(){
      return(
        <nav_bar></nav_bar>
      )
    }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
