import { Component } from "react";
import "./index.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import loading from '../../assets/loading.svg'
export default class DetailsPersonal extends Component {
  state = {
    nameError: "",
    emailError: "",
    confirmPasswordError: "",
    passwordError: "",
  };
  
  continue = (e) => {
    var loading_img=document.getElementsByClassName("loading")
    var btn_loading=document.getElementsByClassName('btn_loading')   
 
    e.preventDefault();
    
    const { name, email, password, confirmPassword,cod } = this.props.values;
    this.setState({
      nameError: "",
      emailError: "",
      confirmPasswordError: "",
      passwordError: "",
    });
    if (name.length < 10) {
      this.setState({ nameError: "Nome inválido" });
      
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.setState({ emailError: "Email inválido" });
      
    } else if (!password || password.length < 8) {
      this.setState({ passwordError: "Senha inválida" });
      
    } else if (password !== confirmPassword) {
      this.setState({ confirmPasswordError: "Senhas não conferem" });
     
    } else {
      btn_loading[0].setAttribute("style","display:none")
      loading_img[0].setAttribute("style","display:inline-flex")     
      setTimeout(()=>{
        this.props.nextStep();
      },1000)
     
    }
  };
componentDidMount(){
  var root=document.getElementsByClassName('background')
  root[0].addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
      this.continue(e)
    }
    
  })
}

 
  render() {
    
    const styles = {   
      button: {
        marginTop: "40px",
        marginBottom: "40px",
      }
     
    
    
    };
    const { name, email, password, confirmPassword, step } = this.props.values;
    
    return (
      <React.Fragment  >
       
        <div className="background" >

          <div className="container">         
            <Box boxShadow={0}>
              <Grid
                container
                sm={12}              
                justify="center"
                className="gridbox"
              >
                <Grid item sm={12} xs={12} >                  
                    <Typography                     
                      align="center"
                      variant="h5"
                      className='typography'
                    >
                      Detalhes Pessoais
                    </Typography>                 
                </Grid>
                <Grid item sm={6} className='grid-flex'>
                  <TextField
                    required
                    id="outlined-read-only-input"
                    label="Nome"
                    defaultValue={name}
                    onChange={this.props.handleChange("name")}
                    variant="outlined"
                    className='textfield'
                    floatinglabeltext="Nome"
                    error={this.state.nameError}
                    helperText={
                      this.state.nameError
                        ? this.state.nameError
                        : "Insira seu nome completo"
                    }
                  />
                </Grid>
                <Grid item sm={6} className='grid-flex'>
                  <TextField
                    required
                    floatinglabeltext="Email"
                    className='textfield'
                    id="outlined-read-only-input"
                    label="Email"
                    type="email"
                    defaultValue={email}
                    onChange={this.props.handleChange("email")}
                    variant="outlined"
                    helperText={
                      this.state.emailError
                        ? this.state.emailError
                        : "Insira seu Email"
                    }
                    error={this.state.emailError}
                  />
                </Grid>
                <Grid item sm={6} className='grid-flex'>
                  <TextField
                    required
                    label="Senha"
                    floatinglabeltext="Senha"
                    className='textfield'
                    defaultValue={password}
                    onChange={this.props.handleChange("password")}
                    type="password"
                    id="outlined-read-only-input"
                    helperText={
                      this.state.passwordError
                        ? this.state.passwordError
                        : "Insira uma senha de 8 digitos"
                    }
                    variant="outlined"
                    error={this.state.passwordError}
                  />
                </Grid>
                <Grid item sm={6} className='grid-flex'>
                  <TextField
                    required
                    label="Confirmação de senha"
                    floatinglabeltext="Confirmação de senha"
                    className='textfield'
                    defaultValue={confirmPassword}
                    onChange={this.props.handleChange("confirmPassword")}
                    type="password"
                    id="outlined-read-only-input"
                    helperText={
                      this.state.confirmPasswordError
                        ? this.state.confirmPasswordError
                        : "Confirme sua senha de 8 digitos"
                    }
                    variant="outlined"
                    error={this.state.confirmPasswordError}
                  />
                </Grid>
                <Grid item xs={12} className='grid-flex'>
               <img src={loading} alt="loading" className="loading" />
                  <Button
                    item
                    sm={6}
                    variant="contained"
                    color="primary"
                    onClick={this.continue}
                    
                   
                    className="btn_loading"
                    style={styles.button}
                  >
                   Próximo
                  </Button>
                </Grid>
               
              </Grid>
            </Box>
          </div>
                  </div>
       
      </React.Fragment>
    );
  }
}
