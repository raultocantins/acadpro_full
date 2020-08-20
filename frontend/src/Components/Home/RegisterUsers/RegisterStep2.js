import { Component } from "react";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
export default class RegisterStep2 extends Component {
  state = {
    nameError: "",
    emailError: "",
    confirmPasswordError: "",
    passwordError: "",
  };
  constructor(props){
    super(props)
    this.Register=this.Register.bind(this)
    this.AlterUser=this.AlterUser.bind(this)
    this.DeleteUser=this.DeleteUser.bind(this)
   
  }
  preve = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

Register(){
  this.props.RegisterUser()
}
AlterUser(){
  this.props.AlterUser()
}
DeleteUser(){
  this.props.DeleteUser()
}
  render() {
    const styles = {
      textfield: {
        marginTop: "0",
        width: "75%",
      },
      button: {
        margin: "20px",
      },
      typography: {
        padding: "5px",
        color: "#fff",
      },

      grid: {
        display: "flex",
        
      },
    };
    const { height, weight, fat, pressure, number } = this.props.values;

    return (
      <React.Fragment>
        <div>
          <Box boxShadow={0}>
            <Grid
              container
              sm={12}
              alignItems="center"
              alignContent="stretch"
              justify="center"
              className="grid"
            >
              <Grid item sm={4} style={styles.grid}>
                <TextField
                 disabled={this.props.values.deletar}
                  required
                  id="outlined-read-only-input"
                  label="Peso"
                  defaultValue={weight}
                  onChange={this.props.handleChange("weight")}
                  variant="outlined"
                  style={styles.textfield}
                  floatinglabeltext="Peso"
                  helperText={
                    this.state.nameError
                      ? this.state.nameError
                      : "Insira o peso(kg)"
                  }
                />
              </Grid>
              <Grid item sm={4} style={styles.grid}>
                <TextField
                 disabled={this.props.values.deletar}
                  required
                  id="outlined-read-only-input"
                  label="Altura"
                  defaultValue={height}
                  onChange={this.props.handleChange("height")}
                  variant="outlined"
                  style={styles.textfield}
                  floatinglabeltext="Altura"
                  helperText={
                    this.state.nameError
                      ? this.state.nameError
                      : "Insira a altura(M)"
                  }
                />
              </Grid>
              <Grid item sm={4} style={styles.grid}>
                <TextField
                 disabled={this.props.values.deletar}
                  required
                  floatinglabeltext="Percentual de Gordura"
                  style={styles.textfield}
                  id="outlined-read-only-input"
                  type="text"
                  defaultValue={fat}
                  onChange={this.props.handleChange("fat")}
                  variant="outlined"
                  helperText={
                    this.state.emailError
                      ? this.state.emailError
                      : "Insira o percentual de gordura"
                  }
                />
              </Grid>
              <Grid
                item
                sm={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItens: "center",
                  
                }}
              >
                <Grid
                  item
                  sm={6}
                
                >
                  <TextField
                    required
                    disabled={this.props.values.deletar}
                    floatinglabeltext="Pressão"
                    style={styles.textfield}
                    id="outlined-read-only-input"
                    type="text"
                    defaultValue={pressure}
                    onChange={this.props.handleChange("pressure")}
                    variant="outlined"
                    helperText={
                      this.state.emailError
                        ? this.state.emailError
                        : "Insira a Pressão"
                    }
                  />
                </Grid>
                <Grid
                  item
                  sm={6}
                  
                >
                  <TextField
                    required
                    disabled={this.props.values.deletar}
                    floatinglabeltext="Contato"
                    style={styles.textfield}
                    id="outlined-read-only-input"
                    type="text"
                    defaultValue={number}
                    onChange={this.props.handleChange("number")}
                    variant="outlined"
                    helperText={
                      this.state.emailError
                        ? this.state.emailError
                        : "Insira seu Contato de Telefone"
                    }
                  />
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                {this.props.values.deletar ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.DeleteUser}
                    style={{
                      width: "10%",
                      marginTop: "10px",
                      marginRight: "5px",
                      backgroundColor: "red",
                    }}
                  >
                    Deletar
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.props.values.id?this.AlterUser:this.Register}
                    style={{
                      width: "10%",
                      marginTop: "10px",
                      marginRight: "5px",
                      backgroundColor: "rgb(76, 175, 80)",
                    }}
                  >
                {this.props.values.id?'Alterar':'Cadastrar'}   
                  </Button>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.preve}
                  style={{
                    width: "10%",
                    marginTop: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.38)",
                  }}
                >
                  Voltar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </React.Fragment>
    );
  }
}
