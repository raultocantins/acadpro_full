import React, { Component } from "react";
import Menu from "./Menu";
import Profile from "./Profile";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from './Content/Dashboard'
import Busines from './Content/Busines'
import Users from './Content/Users'
import User from './Content/User'
import api from '../../api'
import Axios from 'axios'
import './Home.css'
export default class Home extends Component {
   constructor(props) {
        super(props)
        this.state = {
          title:'Dashboard',
            on: false,
            name: 'alex raul santo',
            email: 'alexbraul.arrr@gmail.com',
            password: '',
            confirmPassword: '',
            number: '',
            days: '',
            height: '',
            weight: '',
            fat: '',
            pressure: '',
            birth: '',
            url: '',
            data: {name: 'Sparke Gym'}
        }
        this.Logout = this.Logout.bind(this)
       this.registerUser = this.registerUser.bind(this)
       this.openClosed = this.openClosed.bind(this);
       this.handleTitle=this.handleTitle.bind(this)
    }


   
    componentDidMount() {
      window.location.path='/home'
  
        Axios.post('http://localhost:4000/validateToken', JSON.parse(window.localStorage.getItem('logToken')))
            .then((res) => {
                var data = res.data
                this.setState({ ...this.state.data, data })
                api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

            })
            .catch(err => {
                this.props.history.push("/signin");
                console.log(err)
            })
    }
    Logout() {
        window.localStorage.removeItem('logToken')
        api.defaults.headers.Authorization = `Bearer `
        this.props.history.push("/");
    }
    registerUser() {
        const { name, email, password } = this.state
        api.post('/users', { name, email, password })
            .then(res => {
                alert('cadastrado com sucesso!')
            })
            .catch(err => {
                if (err.response.status === 401) {
                    window.localStorage.removeItem('logToken')
                    api.defaults.headers.Authorization = `Bearer `
                    this.props.history.push("/");
                }else{
                    alert(err.response.data)
                }

            })   }

            openClosed() {
                if (this.state.on) {
                  this.setState({ on: false });
                }
                if (!this.state.on) {
                  this.setState({ on: true });
                }
              }
              handleTitle(value){
                this.setState({title:value})
              }

    render() {

        return ( 
             <div className={this.state.on?'container-home-closed':'container-home-open'}>
        <div className="appbar">
          <AppBar position="static" style={{ height: "100%" }}>
            <Toolbar
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={this.openClosed}
              >
                {this.state.on ? <MenuIcon /> : <ExpandLessIcon />}
              </IconButton>
        <Typography variant="h4">{this.state.title}</Typography>
              <Button color="inherit">Logout</Button>
            </Toolbar>
          </AppBar>
        </div>
        <Router>
        <div
          className="aside"
          style={{ display: this.state.on ? "none" : "flex" }}
        >
          <Paper variant="outlined" square elevation={3} style={{ width: "100%", height: "100%"}} elevation={0}>
            <Profile name={this.state.data.name}/>
            <Menu handleTitle={this.handleTitle} title={this.state.title}/>
          </Paper>
        </div>
        <div className="content">       
               <Switch>
               <Route path='/home'  exact component={Dashboard}/>
               <Route path='/home/dashboard'  component={Dashboard}/>
                   <Route path='/home/users' component={Users}/>             
                   <Route path='/home/user' component={User}/>             
                   <Route path='/home/busines' component={Busines}/>             
               </Switch>
        </div>
           </Router>
        <div className="footer">
          <Paper elevation={3} style={{ height: "100%"}}>
            <Typography variant="body1" color="default" align="center">
              {"Copyright © "}

              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Paper>
        </div>
      </div>
    )




    }
}




