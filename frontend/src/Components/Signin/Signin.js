import React, { Component } from "react";
import Axios from "axios";
import Academia from "../../assets/academia.svg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";
import iconRegister from "../../assets/icons8-gym-48.png";
import api from "../../config/api";
import loading from "../../assets/loading.svg";

import { Link } from "react-router-dom";
import "./Signin.css";

export default class Signin extends Component {
  state = {
    email: "",
    password: "",
    emailError: "",
    error: "",
    checkedA: false,
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangecheckbox = this.handleChangecheckbox.bind(this);
    this.validation = this.validation.bind(this);
  }
  handleChange = (input) => (e) => {
    this.setState({
        error: "", passwordError: ""
      });
var low_text=e.target.value.toLowerCase()
    this.setState({ [input]: low_text });
  };
  handleChangecheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };
  validation() {
    var loading_img = document.getElementsByClassName("loading");
    var btns_verif = document.getElementsByClassName("btns_verif");

    var { email, password } = this.state;
    this.setState({ emailError: "" });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email)) {
      this.setState({ emailError: "Email inválido" });
    } else if(this.state.password===""){
        this.setState({ passwordError: "Insira sua senha, Por favor." });
    }
    else{
      loading_img[0].setAttribute("style", "display:inline-flex");
      btns_verif[0].setAttribute("style", "display:none");
      Axios.post("http://localhost:4000/signin", { email, password })
        .then((res) => {
          var token = JSON.stringify(res.data);
          var tokenJSON = JSON.parse(token);
          window.localStorage.setItem("logToken", token);
          api.headers = {
            Authorization: `Bearer ${tokenJSON.token}`,
          };
          this.props.history.push("/home");
        })
        .catch((err) => {
          loading_img[0].setAttribute("style", "display:none");
          btns_verif[0].setAttribute("style", "display:inline-flex");
          if(err.response.data){
            this.setState({ error: err.response.data }) 
          }else{
            this.setState({
              error: "Servidor indisponivel no momento, tente mais tarde.",
            });
          }
        });
    }
  }
  componentDidMount(){
    
    var root=document.getElementsByClassName('container-signin')
    root[0].addEventListener("keypress",(e)=>{
      if(e.key==="Enter"){
        this.validation()
      }
      
    })
  }
  render() {
    return (
      <div className="container-signin">
        <div className="container-box">
          <div className="logo-register">
            <img src={Academia} alt="academia-logo" className="academia-logo" />
            <h1>Get Started</h1>
            <div className="grup-buttons ">
              <Link to="/signup">
                <Button className="btn-coach " color="primary">
                  <img
                    src={iconRegister}
                    alt="icon_register"
                    className="icon_register"
                  />
                  Inscreva-se
                </Button>
              </Link>
            </div>
          </div>
          <div className="login">
            <Grid container xs={12} className="grid-container">
              <Grid item={true} sm={12}>
                <Typography
                  variant="h4"
                  align="center"
                  color="primary"
                  className="text-entrar"
                >
                  Entrar
                </Typography>
                <Collapse in={this.state.error} className="error-login">
                  <Alert color="error">{this.state.error}</Alert>
                </Collapse>
              </Grid>

              <Grid item={true} sm={12} className="grid-email">
                <TextField
                  className="input-email"
                  required
                  id="outlined-read-only-input"
                  label="Email"
                  defaultValue={this.state.email}
                  onChange={this.handleChange("email")}
                  variant="outlined"
                  floatinglabeltext="Email"
                  error={this.state.emailError}
                  helperText={
                    this.state.emailError
                      ? this.state.emailError
                      : "Insira seu Email"
                  }
                />
              </Grid>
              <Grid item={true} sm={12} className="grid-password">
                <TextField
                  className="input-password"
                  type="password"
                  required
                  id="outlined-read-only-input"
                  label="Senha"
                  defaultValue={this.state.passwordl}
                  onChange={this.handleChange("password")}
                  variant="outlined"
                  floatinglabeltext="Senha"
                  error={this.state.passwordError}
                  helperText={
                    this.state.passwordError
                      ? this.state.passwordError
                      : "Insira sua Senha"
                  }
                />
              </Grid>
              <Grid item={true} sm={12} className="checkbox">
                <Grid
                  item={true}
                  sm={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label style={{ marginRight: "10px" }}>
                    <Checkbox
                      style={{ paddingRight: "5px" }}
                      checked={this.state.checkedA}
                      onChange={this.handleChangecheckbox}
                      name="checkedA"
                      color="primary"
                    />
                    Lembrar Usuário
                  </label>
                  <Link to="/signup">Esqueceu sua senha?</Link>
                </Grid>
              </Grid>
              <Grid item={true} className="loading">
                <img
                  src={loading}
                  alt="loading"
                  style={{ width: "80.35px", height: "40px" }}
                />
              </Grid>

              <Grid item={true} sm={12} className="grid-btn btns_verif">
                <Button
                  className="btn-entrar"
                  color="primary"
                  variant="contained"
                  onClick={this.validation}
                >
                  Entrar
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
