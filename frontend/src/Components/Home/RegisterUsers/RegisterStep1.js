import { Component } from "react";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
export default class RegisterStep1 extends Component {
  state = {
    nameError: "",
    emailError: "",
    confirmPasswordError: "",
    passwordError: "",
    age: 1,
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  handleChange = (event) => {
    this.setState({ age: event.target.value });
  };
 
  render() {
    const styles = {
      textfield: {
        marginTop: "10px",width:"75%"
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
    };

    const { name, email,date,url} = this.props.values;

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
                  required
                  id="outlined-read-only-input"
                  label="Nome"
                  defaultValue={name}
                  onChange={this.props.handleChange("name")}
                  variant="outlined"
                  style={styles.textfield}
                  floatinglabeltext="Nome"
                  error={this.state.nameError}
                  helperText={
                    this.state.nameError
                      ? this.state.nameError
                      : "Nome completo"
                  }
                />
              </Grid>
              <Grid item sm={4} style={styles.grid}>
                <TextField
                  required
                  id="outlined-read-only-input"
                  label="Email"
                  defaultValue={email}
                  onChange={this.props.handleChange("email")}
                  variant="outlined"
                  style={styles.textfield}
                  floatinglabeltext="Email"
                  error={this.state.emailError}
                  helperText={
                    this.state.emailError ? this.state.emailError : "Email"
                  }
                />
              </Grid>
              <Grid item sm={4} style={styles.grid}>
                <TextField
        
                  floatinglabeltext="Url de Perfil"
                  label="Url de Imagem"
                  style={styles.textfield}
                  id="outlined-read-only-input"                 
                  type="text"
                  defaultValue={url}                
                  onChange={this.props.handleChange("url")}
                  variant="outlined"
                  helperText={
                    this.state.urlError
                      ? this.state.urlError
                      : "Insira Uma imagem"
                  }
                  error={this.state.urlError}
                />
              </Grid>
              <Grid item sm={6} style={{display:'flex',justifyContent:"center",alignItens:"center",marginTop:'10px'}}>
                <FormControl variant="outlined" style={{height:'100%',width:'83%'}} >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Planos
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.state.age}
                    onChange={this.handleChange}
                    label="Planos"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={30}>30 Dias R$70,00</MenuItem>
                    <MenuItem value={90}>90 Dias R$200,00</MenuItem>
                    <MenuItem value={365}>Anual R$700,00</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={6} style={styles.grid}>
                <TextField
                  required
                  floatinglabeltext="Data de Nascimento"
                  style={{margin:'0px'}}
                  id="outlined-read-only-input"
                 
                  type="date"
                  defaultValue={date}
                  onChange={this.props.handleChange("birth")}
                  variant="outlined"                 
                  
                />
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
                <Button
                  xs={12}
                  variant="contained"
                  color="primary"
                  onClick={this.continue}
                  style={{
                    width: "10%",
                    marginTop: "10px",
                    backgroundColor: "rgb(76, 175, 80)",
                  }}
                >
                  Próximo
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </React.Fragment>
    );
  }
}
