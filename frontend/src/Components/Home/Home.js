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
import api from '../../api'
import Axios from 'axios'
import './Home.css'
export default class Home extends Component {
   constructor(props) {
        super(props)
        this.state = {
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
            data: []
        }
        this.Logout = this.Logout.bind(this)
       this.registerUser = this.registerUser.bind(this)
       this.openClosed = this.openClosed.bind(this);
    }
    componentDidMount() {
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

            })    }

            openClosed() {
                if (this.state.on) {
                  this.setState({ on: false });
                }
                if (!this.state.on) {
                  this.setState({ on: true });
                }
              }
    render() {

        return ( 
             <div className="container-home-open">
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
              <Typography variant="h4">Dashboard</Typography>
              <Button color="inherit">Logout</Button>
            </Toolbar>
          </AppBar>
        </div>
        <div
          className="aside"
          style={{ display: this.state.on ? "none" : "flex" }}
        >
          <Paper style={{ width: "100%", height: "100%" }} elevation={0}>
            <Profile name={this.state.data.name}/>
            <Menu />
          </Paper>
        </div>
        <div classNam e="content"></div>
        <div className="footer">
          <Paper elevation={3} style={{ height: "100%" }}>
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




