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
export default class DetailsRedesSociais extends Component {
    state = {
        numberError: "",
        cepError: "",
    }
    continue = e => {
        e.preventDefault()
        
        this.setState({
            numberError: "",
            cepError: ""
        })
        const { number, cep } = this.props.values       
        if(number.length < 8) {
            this.setState({ numberError: "Telefone inválido" })
        } if (cep.length < 8) {
            this.setState({ cepError: "Cep inválido" })
        } else {
            this.props.nextStep()

        }
 

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
            progressBar:{
               height:"40px"
            }
        }

        const { facebook, number, instagram, cep, step } = this.props.values
        const { progressBar } = this.props



        return (

            <React.Fragment>
<div style={styles.div} className="container">
<Box boxShadow={3}>
                <Grid container sm={12} alignItems='center' alignContent='between' justify='center'>
                    <Grid item={true} sm={12}>
                        <Paper elevation={10}>
                            <Typography variant='h4' align='center' style={styles.typography} color='primary'>
                                Redes Sociais
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item={true} sm={6}>
                        <TextField

                            label="Facebook"
                            floatinglabeltext="Facebook" style={styles.textfield} defaultValue={facebook}
                            onChange={this.props.handleChange('facebook')}
                            id="outlined-read-only-input"
                            helperText="Insira seu facebook"
                            variant="outlined"
                        />

                    </Grid>
                    <Grid item={true} sm={6}>
                        <TextField
                            label="Instagram"
                            floatinglabeltext="Instagram" style={styles.textfield} defaultValue={instagram}
                            onChange={this.props.handleChange('instagram')}
                            id="outlined-read-only-input"
                            helperText="Insira seu instagram"

                            variant="outlined"
                        />

                    </Grid>
                    <Grid item={true} sm={6}>
                        <TextField
                            required
                            label="Telefone"
                            floatinglabeltext="Telefone" style={styles.textfield} defaultValue={number}
                            onChange={this.props.handleChange('number')}
                            id="outlined-read-only-input"
                            variant="outlined"
                            error={this.state.numberError}
                            helperText={this.state.numberError ? this.state.numberError : "Insira seu telefone"}
                        />

                    </Grid>
                    <Grid item={true} sm={6}>
                        <TextField
                            required
                            label="Cep"
                            floatinglabeltext="Cep" style={styles.textfield} defaultValue={cep}
                            onChange={this.props.handleChange('cep')}
                            id="outlined-read-only-input"
                            variant="outlined"
                            error={this.state.cepError}
                            helperText={this.state.cepError ? this.state.cepError : "Insira seu cep"}
                        />

                    </Grid>
                    <Grid item={true} sm={6}>
                        <Button item={true} sm={6} variant="contained" color="primary" onClick={this.continue}
                            style={styles.buttonNext}
                        >
                            Próximo
                        </Button>
                        <Button item={true} sm={6} variant="contained" color="default" onClick={this.prev}
                            style={styles.buttonPrev}
                        >Voltar
                        </Button>

                    </Grid>
                    <Grid item={true} xs={12}>
                        <LinearProgress variant="determinate" value={progressBar(step)} style={styles.progressBar}/>

                    </Grid>


                </Grid>



</Box>
</div>
            </React.Fragment>


        )

    }
}