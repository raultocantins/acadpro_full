import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './Components/Signup/Signup'
import Signin from './Components/Signin/Signin'
import Product from './Components/Product/Product'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/" exact={true} component={Product} />
        <Route path="/home"  component={App} />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
