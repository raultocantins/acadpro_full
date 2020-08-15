import { Component } from "react";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
export default class RegisterStep2 extends Component {
  state = {
    nameError: "",
    emailError: "",
    confirmPasswordError: "",
    passwordError: "",
  };
  preve = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const styles = {
      textfield: {
        marginTop: "10px",
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
    };
    const { name, email } = this.props.values;

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
                  defaultValue={name}
                  onChange={this.props.handleChange("email")}
                  variant="outlined"
                  style={styles.textfield}
                  floatinglabeltext="Email"
                  error={this.state.nameError}
                  helperText={
                    this.state.nameError ? this.state.nameError : "Email"
                  }
                />
              </Grid>
              <Grid item sm={4} style={styles.grid}>
                <TextField
                  required
                  floatinglabeltext="Data de Nascimento"
                  style={styles.textfield}
                  id="outlined-read-only-input"
                  type="text"
                  defaultValue={email}
                  onChange={(e) => {
                    this.img(e);
                  }}
                  variant="outlined"
                  helperText={
                    this.state.emailError
                      ? this.state.emailError
                      : "Insira Uma imagem"
                  }
                  error={this.state.emailError}
                />
              </Grid>
              <Grid
                item
                sm={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItens: "center",
                  marginTop: "10px",
                }}
              >
                <FormControl
                  variant="outlined"
                  style={{ height: "100%", width: "83%" }}
                >
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
                  style={{ margin: "0px" }}
                  id="outlined-read-only-input"
                  type="date"
                  defaultValue={email}
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
                {this.props.values.del ? (
                  <Button
                    variant="contained"
                    color="primary"
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
                    style={{
                        width: "10%",
                      marginTop: "10px",
                      marginRight: "5px",
                      backgroundColor: "rgb(76, 175, 80)",
                    }}
                  >
                    Cadastrar
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
