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
        const user = { name, email, number, kit, cep, url, password, confirmPassword }
        Axios.post('http://localhost:4000/signup', user)
            .then(res => {
                this.props.nextStep()
            })
            .catch(err => {     
                if(err.response){
                    this.setState({ message: err.response.data })

                }else{
                    this.setState({ message: 'Não foi possivel conectar ao servidor, Por favor Tente mais tarde!' })
                    
                }           
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
            }           
                      
        }

        const { name, email, facebook, number, instagram, kit, cep, url, step } = this.props.values
        const { progressBar } = this.props



        return (

            <React.Fragment>
                     <div className="background">
                <div style={styles.div} className="container">
                   
                    <Box boxShadow={0}>
                    <Grid container alignItems='center' alignContent='center' justify='center' className="gridbox"  >
                            <Grid item sm={12}  xs={12}>
                                <Paper elevation={10} className='paper-title'>
                                    <Typography variant='h4' align='center' className='typography'  >
                                        Verificação de Dados
                        </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                            <Collapse in={this.state.message} style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                        <Alert color='error' onClose={()=>this.setState({message:''})} >
                           {this.state.message}
                          </Alert>
                    </Collapse> 

                            </Grid>
                            <Grid item xs={6} className='grid-flex' sm={6}>
                                <List >
                                    <ListItem  style={{margin:'10px'}} >
                                        <ListItemText primary="Nome" secondary={name} />
                                    </ListItem >
                                    <ListItem  style={{margin:'10px'}} >
                                        <ListItemText primary="Email" secondary={email} />
                                    </ListItem >
                                    <ListItem  style={{margin:'10px'}} >
                                        <ListItemText primary="Facebook" secondary={facebook} />
                                    </ListItem >
                                    <ListItem  style={{margin:'10px'}} >
                                        <ListItemText primary="Telefone" secondary={number} />
                                    </ListItem >
                                </List>

                            </Grid>
                            <Grid items xs={6} sm={6} className='grid-flex'>
                                <List>
                                    <ListItem  style={{margin:'10px'}} >
                                        <ListItemText primary="Instagram" secondary={instagram} />
                                    </ListItem >
                                    <ListItem  style={{margin:'10px'}} >
                                        <ListItemText primary="Cep" secondary={cep} />
                                    </ListItem >
                                    <ListItem  style={{margin:'10px'}} >
                                        <ListItemText primary="Logo" secondary={url} />
                                    </ListItem >
                                    <ListItem  style={{margin:'10px'}} >
                                        <ListItemText primary="Plano" secondary={kit} />
                                    </ListItem >

                                </List>

                            </Grid>
                            <Grid item sm={12} className='grid-flex'>
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