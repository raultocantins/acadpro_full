import { Component } from 'react'
import baseUrl from '../../config/baseUrl'
import Axios from 'axios'
import './DetailsPersonal.css'
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { List, ListItem, ListItemText } from '@material-ui/core/';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
export default class Verif extends Component {
   
 register(e) {
    e.preventDefault()
    
    /* Axios.post(`${baseUrl}/signup`,data)
    .then(res=>{
        this.props.nextStep()
    })
    .catch(err=>{
        alert(err)
    })*/

}

    prev = e => {
        e.preventDefault()
        this.props.prevStep()

    }






    render() {
        const styles = {
            div: {
                marginTop: '100px', width: "50%", height: "auto", marginLeft: "25%", marginRight: "25%"
            },
            buttonNext: {
                marginTop: '40px', marginRight: '5px', marginBottom: "40px"
            },
            buttonPrev: {
                marginTop: '40px', marginBottom: "40px"
            },

            typography: {
                padding: '10px'
            },
            progressBar: {
                height: "40px"
            }
        }

        const { name, email, facebook, number, instagram, kit, cep, url, step } = this.props.values
        const { progressBar } = this.props



        return (

            <React.Fragment>
                <div style={styles.div} className="container">
                    <Box boxShadow={3}>

                        <Grid container sm={12} alignItems='center' alignContent='between' justify='center'>
                            <Grid item='true' sm={12}>
                                <Paper elevation={10}>
                                    <Typography variant='h4' align='center' style={styles.typography} color='primary'>
                                        Verificação de Dados
                        </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} style={styles.list} sm={6}>
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
                            <Grid items xs={12} sm={6}>
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
                            <Grid item sm={6}>
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
                            <Grid item='true' xs={12}>
                                <LinearProgress variant="determinate" value={progressBar(step)} style={styles.progressBar} />

                            </Grid>

                        </Grid>


                    </Box>
                </div>



            </React.Fragment>


        )

    }
}