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
  state={

  }
  constructor(props){
    super(props)
    this.ClearForm=this.ClearForm.bind(this)
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();

  };


 ClearForm(){
   this.props.ClearForm()
 }
  render() {
    const styles = {
      textfield: {
        width:"75%"
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
        justifyContent:'center'
           
       
      },
    };

    const {name,email,days,birth,url} = this.props.values;

    return (
      <React.Fragment>
        <div>
          <Box boxShadow={0} style={{marginTop:'20px'}}>
            <Grid
              container
              sm={12}
              alignItems="center"             
              justify="center"
              className="grid"
              
            >
              <Grid item sm={4} style={styles.grid}>
                <TextField  
                disabled={this.props.values.deletar}               
                  id="outlined-read-only-input"
                  label="Nome"
                  defaultValue={name}
                  onChange={this.props.handleChange("name")}
                  variant="outlined"
                  style={styles.textfield}
                  floatinglabeltext="Nome"                 
                  helperText={
                    this.state.nameError
                      ? this.state.nameError
                      : "Nome completo"
                  }
                />
              </Grid>
              <Grid item sm={4} style={styles.grid}>
                <TextField
                disabled={this.props.values.deletar}
                  required
                  id="outlined-read-only-input"
                  label="Email"
                  defaultValue={email}
                  onChange={this.props.handleChange("email")}
                  variant="outlined"
                  style={styles.textfield}
                  floatinglabeltext="Email"             
                  helperText={
                    this.state.emailError ? this.state.emailError : "Insira o Email"
                  }
                />
              </Grid>
              <Grid item sm={4} style={styles.grid}>
                <TextField
                disabled={this.props.values.deletar}
        
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
                />
              </Grid>
              <Grid item sm={12}  >
                <FormControl variant="outlined" style={{width:'25%',marginLeft:'50px',marginRight:'102px'}}
                disabled={this.props.values.deletar}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Planos
                  </InputLabel>
                  <Select
               
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={days}
                    onChange={this.props.handleChange("days")}
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
                <TextField
               
                  required
                  disabled={this.props.values.deletar}
                  floatinglabeltext="Data de Nascimento"                  
                  id="outlined-read-only-input"                 
                  type="date"
                  defaultValue={birth}
                  onChange={this.props.handleChange("birth")}
                  variant="outlined"     
                  helperText={
                    this.state.emailError ? this.state.emailError : "Data de nascimento"
                  }           
                  
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
                    marginRight: "5px",
                    backgroundColor: "rgb(76, 175, 80)",
                  }}
                >
                  Próximo
                </Button>
                <Button
                  variant="contained"
                  color="primary" 
                  onClick={this.ClearForm}                
                  style={{
                    width: "10%",
                    marginTop: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.38)",
                  }}
                >
                  Limpar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </React.Fragment>
    );
  }
}
