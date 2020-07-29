import { Component } from 'react'
import './DetailsPersonal.css'
import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export default class DetailsPersonal extends Component {
    state = {
        nameError: "",
        emailError: "",
        confirmPasswordError: "",
        passwordError: ""
    }
    continue = e => {
        e.preventDefault()
        const { name, email, password, confirmPassword } = this.props.values
        this.setState({
            nameError: "",
            emailError: "",
            confirmPasswordError: "",
            passwordError: ""
        })
        if (name.length < 10) {
            this.setState({ nameError: "Nome inválido" })
        } else if (email.length < 10) {
            this.setState({ emailError: "Email inválido" })
        } else if (!password || password.length < 8) {
            this.setState({ passwordError: "Senha inválida" })
        } else if (password !== confirmPassword) {
            this.setState({ confirmPasswordError: "Senhas não conferem" })
        }
        else {
            this.props.nextStep()

        }
       
    }



    render() {
        const styles = {
            div: {
                marginTop: '100px', width: "50%", height: "auto", marginLeft: "25%", marginRight: "25%", display: "flex", flexDirection: "row"
            },
            textfield: {
                marginTop: '40px'
            },
            button: {
                marginTop: '40px', marginBottom: "40px"
            },
            typography: {
                padding: '10px'
            },
            progressBar:{
               height:"40px"
            }

        }

        const { name, email, password, confirmPassword, step } = this.props.values
        const { progressBar } = this.props




        return (

            <React.Fragment >





                <div style={styles.div} className="container">
                    <Box boxShadow={3}>



                        <Grid container sm={12} alignItems='center' alignContent='between' justify='center' >
                            <Grid item='true' sm={12}>
                                <Paper elevation={10}>
                                    <Typography variant='h4' align='center' style={styles.typography} color='primary'>
                                        Detalhes Pessoais
                        </Typography>
                                </Paper>
                            </Grid>

                            <Grid item='true' sm={6}>
                                <TextField
                                    required
                                    id="outlined-read-only-input"
                                    label="Nome"
                                    defaultValue={name}
                                    onChange={this.props.handleChange('name')}
                                    variant="outlined"
                                    style={styles.textfield}
                                    floatingLabelText="Nome"
                                    error={this.state.nameError}
                                    helperText={this.state.nameError ? this.state.nameError : "Insira seu nome completo"}
                                />
                            </Grid>
                            <Grid item='true' sm={6}>
                                <TextField
                                    required
                                    floatingLabelText="Email"
                                    style={styles.textfield}
                                    id="outlined-read-only-input"
                                    label="Email"
                                    type="email"
                                    defaultValue={email}
                                    onChange={this.props.handleChange('email')}
                                    variant="outlined"
                                    helperText={this.state.emailError ? this.state.emailError : "Insira seu Email"}
                                    error={this.state.emailError}
                                />

                            </Grid>
                            <Grid item='true' sm={6}>

                                <TextField
                                    required
                                    label="Senha"
                                    floatingLabelText="Senha" style={styles.textfield} defaultValue={password}
                                    onChange={this.props.handleChange('password')} type="password"
                                    id="outlined-read-only-input"
                                    helperText={this.state.passwordError ? this.state.passwordError : "Insira uma senha de 8 digitos"}
                                    variant="outlined"
                                    error={this.state.passwordError}
                                />

                            </Grid>
                            <Grid item='true' sm={6}>
                                <TextField
                                    required
                                    label="Confirmação de senha"
                                    floatingLabelText="Confirmação de senha" style={styles.textfield} defaultValue={confirmPassword}
                                    onChange={this.props.handleChange('confirmPassword')} type="password"
                                    id="outlined-read-only-input"
                                    helperText={this.state.confirmPasswordError ? this.state.confirmPasswordError : "Confirme sua senha de 8 digitos"}
                                    variant="outlined"
                                    error={this.state.confirmPasswordError}
                                />

                            </Grid>
                            <Grid item='true' sm={6} >
                                <Button item='true' sm={6} variant="contained" color="primary" onClick={this.continue}
                                    style={styles.button}
                                    
                                >
                                    Próximo
                        </Button>

                            </Grid>

                            <Grid item='true' xs={12}>
                                <LinearProgress variant="determinate" value={progressBar(step)} style={styles.progressBar}/>

                            </Grid>
                        </Grid>


                    </Box>

                </div>




                
            </React.Fragment>


        )

    }
}