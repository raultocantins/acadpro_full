import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Grid from '@material-ui/core/Grid'
import sucesso from '../../assets/winner.svg'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import './index.css'
import {
    Link
} from "react-router-dom";
export default class Success extends Component {

    render() {
        const styles = {           
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
            <div className="background">

         
            <div style={styles.div} className="container">
                <Grid container alignItems='center' alignContent='center' justify='center' className="gridbox">
                    <Grid item xs={12}>                       
                            <Typography variant='h5' align='center' className='typography' >
                                Cadastro Finalizado Com Sucesso <VerifiedUserIcon/>
                </Typography>
                <Typography variant='h6' align='center' className='typography' >
                               Para acessar a plataforma clique na imagem abaixo.
                             
                </Typography> 
                     
                    </Grid>
                    <Grid item xs={12} alignItems='center' justify='center' alignContent='center'>
                    <Link to="/signin" style={styles.link} className="sucesso">
                        <img src={sucesso} alt="sucesso" style={styles.sucesso} />
                        </Link>
                    </Grid>                    
                    <Typography variant='h7' align='center' className='typography' >
                    © Copyright AcadPro {new Date().getFullYear()} <FitnessCenterIcon/>
                </Typography>
                </Grid>
             
            </div>
            </div>


        )
    }
}