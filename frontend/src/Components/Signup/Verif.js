import { Component } from 'react'
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import Axios from 'axios'
import './index.css'
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { List, ListItem, ListItemText } from '@material-ui/core/';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
export default class Verif extends Component {
    state = {
        message: "",
    }
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }

    register(e) {
        e.preventDefault()
        const { name, email, facebook, number, instagram, kit, cep, url, password, confirmPassword } = this.props.values
        const user = { name, email, facebook, number, instagram, kit, cep, url, password, confirmPassword }
        Axios.post('http://localhost:4000/signup', user)
            .then(res => {
                this.props.nextStep()
            })
            .catch(err => {                
                this.setState({ message: err.response.data })
            })
    }


    prev = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const styles = {            
            buttonNext: {
                marginTop: '40px', marginRight: '5px', marginBottom: "40px"
            },
            buttonPrev: {
                marginTop: '40px', marginBottom: "40px"
            },

            typography: {
                padding: '10px',color:'#fff'
            },
                       grid:{
                display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"
            }
        }

        const { name, email, facebook, number, instagram, kit, cep, url, step } = this.props.values
        const { progressBar } = this.props



        return (

            <React.Fragment>
                     <div className="background">
                <div style={styles.div} className="container">
                   
                    <Box boxShadow={0}>
                    <Grid container alignItems='center' alignContent='center' justify='center' className="grid"  >
                            <Grid item sm={12}  xs={12}>
                                <Paper elevation={10} className='paper-title'>
                                    <Typography variant='h4' align='center' style={styles.typography} color='primary'>
                                        Verificação de Dados
                        </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                            <Collapse in={this.state.message}>
                        <Alert color='error'>
                           {this.state.message}
                          </Alert>
                    </Collapse>

                            </Grid>
                            <Grid item xs={6} style={styles.grid} sm={6}>
                                <List >
                                    <ListItem  >
                                        <ListItemText primary="Nome" secondary={name} />
                                    </ListItem >
                                    <ListItem  >
                                        <ListItemText primary="Email" secondary={email} />
                                    </ListItem >
                                    <ListItem  >
                                        <ListItemText primary="Facebook" secondary={facebook} />
                                    </ListItem >
                                    <ListItem  >
                                        <ListItemText primary="Telefone" secondary={number} />
                                    </ListItem >
                                </List>

                            </Grid>
                            <Grid items xs={6} sm={6} style={styles.grid}>
                                <List>
                                    <ListItem  >
                                        <ListItemText primary="Instagram" secondary={instagram} />
                                    </ListItem >
                                    <ListItem  >
                                        <ListItemText primary="Cep" secondary={cep} />
                                    </ListItem >
                                    <ListItem  >
                                        <ListItemText primary="Logo" secondary={url} />
                                    </ListItem >
                                    <ListItem  >
                                        <ListItemText primary="Plano" secondary={kit} />
                                    </ListItem >

                                </List>

                            </Grid>
                            <Grid item sm={12} style={styles.grid}>
                                <Button variant="contained" color="primary" onClick={this.register}
                                    style={styles.buttonNext}
                                >
                                    Confirmar
                        </Button>
                                <Button variant="contained" color="default" onClick={this.prev}
                                    style={styles.buttonPrev}
                                >Voltar
                        </Button>
                            </Grid>
                            <Grid item md={12}>
                                <LinearProgress variant="determinate" value={progressBar(step)}  className='progressBar' />

                            </Grid>

                        </Grid>


                    </Box>
                </div>

                </div>

            </React.Fragment>


        )

    }
}