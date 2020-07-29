import { Component } from 'react'
import './DetailsPersonal.css'
import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
export default class Package extends Component {

    continue = e => {
        e.preventDefault()
        console.log(this.state)
        this.props.nextStep()

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
            textfield: {
                marginTop: '40px'
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


        const { kit, step } = this.props.values
        const { progressBar } = this.props


        return (

            <React.Fragment>
                <div style={styles.div} className="container">
                    <Box boxShadow={3}>

                        <Grid container sm={12} alignItems='center' alignContent='between' justify='center' >
                            <Grid item='true' sm={12}>
                                <Paper elevation={10}>
                                    <Typography variant='h4' align='center' style={styles.typography} color='primary'>
                                        Escolha o Plano
                        </Typography>
                                </Paper>
                            </Grid>
                            <Grid item='true' sm={6}>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select"
                                    value={kit}
                                    
                                    style={styles.textfield}
                                    onChange={this.props.handleChange('kit')}
                                    helperText="Selecione o plano"
                                >
                                    <MenuItem value='free' default>
                                        Free
                                        </MenuItem>
                                    <MenuItem value='pro'>
                                        Pro
                                        </MenuItem>
                                    <MenuItem value='premiun'>
                                        Premiun
                                        </MenuItem>
                                </TextField>

                            </Grid>
                            <Grid item='true' sm={6}>
                                <input
                                    style={{ display: 'none' }}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span">
                                        Foto de Perfil
        </Button>
                                </label>

                            </Grid>
                            <Grid item='true' sm={6}>
                                <Button variant="contained" color="primary" onClick={this.continue}
                                    style={styles.buttonNext}
                                >
                                    Próximo
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