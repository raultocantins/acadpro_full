import { Component } from 'react'
import './index.css'
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
           
            buttonNext: {
                marginTop: '40px', marginRight: '5px', marginBottom: "40px"
            },
            buttonPrev: {
                marginTop: '40px', marginBottom: "40px"
            }        
         
        }
        const { facebook, number, instagram, cep, step } = this.props.values
        const { progressBar } = this.props



        return (

            <React.Fragment>

<div className="background">
<div style={styles.div} className="container">
<Box boxShadow={0}>
                <Grid container sm={12} alignItems='center' alignContent='between' justify='center' className="gridbox">
                    <Grid item sm={12}  xs={12}>
                        <Paper elevation={10} className='paper-title'>
                            <Typography variant='h4' align='center' className='typography' >
                                Redes Sociais
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} className='grid-flex'>
                        <TextField

                            label="Facebook"
                            floatinglabeltext="Facebook"  className='textfield' defaultValue={facebook}
                            onChange={this.props.handleChange('facebook')}
                            id="outlined-read-only-input"
                            helperText="Insira seu facebook"
                            variant="outlined"
                        />

                    </Grid>
                    <Grid item sm={6} className='grid-flex'>
                        <TextField
                            label="Instagram"
                            floatinglabeltext="Instagram"  className='textfield' defaultValue={instagram}
                            onChange={this.props.handleChange('instagram')}
                            id="outlined-read-only-input"
                            helperText="Insira seu instagram"

                            variant="outlined"
                        />

                    </Grid>
                    <Grid item sm={6} className='grid-flex'>
                        <TextField
                            required
                            label="Telefone"
                            floatinglabeltext="Telefone"  className='textfield' defaultValue={number}
                            onChange={this.props.handleChange('number')}
                            id="outlined-read-only-input"
                            variant="outlined"
                            error={this.state.numberError}
                            helperText={this.state.numberError ? this.state.numberError : "Insira seu telefone"}
                        />

                    </Grid>
                    <Grid item sm={6}className='grid-flex'>
                        <TextField
                            required
                            label="Cep"
                            floatinglabeltext="Cep"  className='textfield' defaultValue={cep}
                            onChange={this.props.handleChange('cep')}
                            id="outlined-read-only-input"
                            variant="outlined"
                            error={this.state.cepError}
                            helperText={this.state.cepError ? this.state.cepError : "Insira seu cep"}
                        />

                    </Grid>
                    <Grid item xs={12} className='grid-flex'>
                        <Button item xs={6} variant="contained" color="primary" onClick={this.continue}
                            style={styles.buttonNext}
                        >
                            Próximo
                        </Button>
                        <Button item xs={6} variant="contained" color="default" onClick={this.prev}
                            style={styles.buttonPrev}
                        >Voltar
                        </Button>

                    </Grid>
                    <Grid item md={12}>
                        <LinearProgress variant="determinate" value={progressBar(step)} className='progressBar'/>

                    </Grid>


                </Grid>



</Box>
</div>
</div>
            </React.Fragment>


        )

    }
}