import React, { Component } from "react";
import Academia from '../../assets/academia.svg'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import {
    Link
} from "react-router-dom";
import './Signin.css'

export default class Signin extends Component {
    state = {
        email: "",
        password: "",
        emailError: "",
        checkedA: false,
    }
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangecheckbox = this.handleChangecheckbox.bind(this)
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }
    handleChangecheckbox = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    };
    render() {
        return (<div className="container-signin">
            <div className="container-box">
                <div className="logo-register">
                    <img src={Academia} alt="academia-logo" className="academia-logo" />
                    <h1>Get Started</h1>
                    <div className="grup-buttons ">
                        <Link to="/signup">
                            <Button className="btn-coach " color="primary">
                                Inscrever como Treinador
                        </Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="btn-gym">
                                Inscrever como Academia
                        </Button>
                        </Link>

                    </div>
                </div>
                <div className="login">
                    <Grid container className="grid-container">
                        <Grid item={true} sm={12}>
                            <Typography variant='h4' align='center' color='primary' className='text-entrar' >
                                Entrar
                        </Typography>
                        </Grid>
                        <Grid item={true} sm={12} className="grid-email" >
                            <TextField
                                className="input-email"
                                required
                                id="outlined-read-only-input"
                                label="Email"
                                defaultValue={this.state.email}
                                onChange={this.handleChange('email')}
                                variant="outlined"
                                floatinglabeltext="Email"
                                error={this.state.emailError}
                                helperText={this.state.nameError ? this.state.nameError : "Insira seu Email"}
                            />
                        </Grid>
                        <Grid item={true} sm={12} className="grid-password">
                            <TextField
                                className="input-password"
                                type="password"
                                required
                                id="outlined-read-only-input"
                                label="Senha"
                                defaultValue={this.state.passwordl}
                                onChange={this.handleChange('password')}
                                variant="outlined"
                                floatinglabeltext="Senha"
                                error={this.state.passwordError}
                                helperText={this.state.passwordError ? this.state.passwordError : "Insira sua Senha"}
                            />

                        </Grid>
                        <Grid item={true} sm={12} className="checkbox">
                            < Grid item={true} sm={12} style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
                                <label style={{marginRight:"10px"}}>
                                <Checkbox
                                style={{paddingRight:'5px'}}
                                    checked={this.state.checkedA}
                                    onChange={this.handleChangecheckbox}
                                    name="checkedA"
                                    color="primary"

                                />Lembrar Usuário
                                </label>
                                <Link to='/signup'>
                               Esqueceu sua senha?
                                </Link>
                            </Grid>
                            

                        </Grid>
                        
                        <Grid item={true} sm={12} className="grid-btn">
                            <Button className="btn-entrar" color="primary" variant="contained" >
                                Entrar
                        </Button>
                        </Grid>
                        

                    </Grid>
                </div>
            </div>
        </div>)
    }
}