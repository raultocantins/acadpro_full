import React from 'react'
import Signup from './Components/Signup/Signup'
import Signin from './Components/Signin/Signin'
import Product from './Components/Product/Product'
import Home from './Components/Home/Home'
import { isAuthenticate } from './auth'
import {
    BrowserRouter as Router,
    Switch,
    Route,    
    Redirect
} from "react-router-dom";
const PrivateRouter = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            isAuthenticate() ? (<Component {...props}  />) :
                (<Redirect to={{ pathname: "/signin", state: { from: props.location } }} />)
        )} />
)

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/" exact={true} component={Product} />
            <PrivateRouter path='/home' component={Home}/>            
        </Switch>
    </Router>
)
export default Routes;