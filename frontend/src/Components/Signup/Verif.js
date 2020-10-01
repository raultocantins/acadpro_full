import { Component } from "react";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import Axios from "axios";
import "./index.css";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import loading from '../../assets/load.gif'
import Box from "@material-ui/core/Box";
export default class Verif extends Component {
  state = {
    message: "",
  };
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register(e) {
    var loading_img=document.getElementsByClassName("loading")
    var btns_verif=document.getElementsByClassName('btns_verif')  
    loading_img[0].setAttribute("style","display:inline-flex")
    btns_verif[0].setAttribute("style","display:none")
    e.preventDefault();
    const {
      name,
      email, 
      password,
      confirmPassword,
    } = this.props.values;
    const user = {
      name,
      email,      
      password,
      confirmPassword,
    };
    Axios.post("http://localhost:4000/signup", user)
      .then((res) => {
        this.props.nextStep();
      })
      .catch((err) => {
        loading_img[0].setAttribute("style","display:none")
    btns_verif[0].setAttribute("style","display:inline-flex")
        if (err.response) {
          this.setState({ message: err.response.data });
        } else {
          this.setState({
            message:
              "Não foi possivel conectar ao servidor, Por favor Tente mais tarde!",
          });
        }
      });
     // this.props.nextStep();
  }

  prev = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const styles = {
      buttonNext: {
        marginTop: "40px",
        marginRight: "5px",
        marginBottom: "40px",
      },
      buttonPrev: {
        marginTop: "40px",
        marginBottom: "40px",
      },
    };

    const {
      name,
      email,    
      step
    } = this.props.values;
   

    return (
      <React.Fragment>
        <div className="background">
          <div style={styles.div} className="container">
            <Box boxShadow={0}>
              <Grid
                container            
                justify="center"
                className="gridbox"
              >
                <Grid item sm={12} xs={12}>
                  <Typography
                    variant="h5"
                    align="center"
                    className="typography"
                  >
                    Verificação de Dados
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Collapse
                    in={this.state.message}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Alert
                      color="error"
                      onClose={() => this.setState({ message: "" })}
                    >
                      {this.state.message}
                    </Alert>
                  </Collapse>
                </Grid>
                <Grid item xs={12} className="grid-flex" sm={12}>
                  <List style={{width:"100%"}}>
                    <ListItem style={{ width:"100%",textAlign:"center"}}>
                      <ListItemText primary="Nome" secondary={name} />
                      <ListItemText primary="Email" secondary={email} />
                    </ListItem>                                      
                  </List>
                </Grid>
                <Grid items xs={12} sm={12} className="grid-flex">
                  <List>
                  <Typography
                    variant="h6"
                    align="center"
                    className="typography"
                  >
                    <h5>Foi enviado um código de confirmação para {email}.</h5>
                <h5>Por favor insira o Código</h5>
                <TextField
                    required
                    label="Código"
                    floatinglabeltext="cod"
                    className='textfield'
                    defaultValue={456123}                    
                    type="number"
                    id="outlined-read-only-input"
                    helperText={"Insira o Código de 6 Digitos"  }
                    variant="outlined"                    
                  />
        
                  </Typography>
               
                  </List>
                </Grid>
                <Grid item sm={12} className="grid-flex loading">
                <img src={loading} alt="loading" />
                </Grid>
                <Grid item sm={12} className="grid-flex btns_verif" >               
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.register}
                    className="btn_loading"
                    style={styles.buttonNext}
                  >
                    Confirmar
                  </Button>
                  <Button
                  className="btn_loading"
                    variant="contained"
                    color="default"
                    onClick={this.prev}
                    style={styles.buttonPrev}
                  >
                    Voltar
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
