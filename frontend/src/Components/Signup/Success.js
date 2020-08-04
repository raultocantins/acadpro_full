import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import sucesso from '../../assets/sucesso.svg'
import Button from '@material-ui/core/Button'
import './DetailsPersonal.css'
import {
    Link
} from "react-router-dom";
export default class Success extends Component {

    render() {
        const styles = {
            div: {
                marginTop: '100px', width: "50%", height: "auto", marginLeft: "25%", marginRight: "25%"
            },
            typography: {
                padding: '10px'
            },
            progressBar: {
                height: "40px"
            },
            sucesso: {
                width: '100%',
                height: "300px",
                marginTop: "40px",
                marginBottom: "40px"
            
            },
            buttonSignin: {
                marginBottom: "40px",width:"100%"
            },
            link: { outline: 'none', textDecoration: "none", color: "white" }
        }
        return (
            <div style={styles.div} className="container">
                <Grid container alignItems='center' alignContent='center' justify='center' className="grid">
                    <Grid item='true' xs={12}>
                        <Paper elevation={10}>
                            <Typography variant='h4' align='center' style={styles.typography} color='primary'>
                                Cadastro finalizado com sucesso
                </Typography>
                        </Paper>
                    </Grid>
                    <Grid item='true' xs={12} alignItems='center' justify='center' alignContent='center'>
                        <img src={sucesso} alt="sucesso" style={styles.sucesso} />
                    </Grid>
                    <Grid item='true' xs={12}  >
                        <Button variant="contained" color="primary" style={styles.buttonSignin}>
                            <Link to="/signin" style={styles.link}>
                                Fazer Login
                            </Link>
                        </Button>
                    </Grid>
                    
                </Grid>
            </div>


        )
    }
}