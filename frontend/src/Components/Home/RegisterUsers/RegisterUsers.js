import { Component } from "react";
import React from "react";
import api from "../../../config/api";
import "./RegisterUsers.css";
import MaterialTable from "material-table";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Loading from '../../../assets/loading.svg'
export default class Registerusers extends Component {
  state = {
    id: "",
    deletar: false,    
    name: "",    
    number: "",
    days: "",
    height: "",
    weight: "",   
    page: 0,
    rowsPerPage: 5,
    data: [],
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);    
    this.EditUser = this.EditUser.bind(this);
    this.RemoveUser = this.RemoveUser.bind(this);
    this.RegisterUser = this.RegisterUser.bind(this);
    this.DeleteUser = this.DeleteUser.bind(this);
    this.ClearForm = this.ClearForm.bind(this);
  }
  componentDidMount() {
    api.get("/users", {}, api.headers)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data);
        } else {
          console.log(err);
        }
      });
  }

  handleChange = (input) => (e) => {
   
    this.setState({ [input]: e.target.value });  
  };
  EditUser(row) {
    const {
      name,       
      days,     
      weight,     
      height,
      number,
      id     
    } = row;
    this.setState({
      id: id,
      name: name,    
      days: days,
      weight: weight,
     height: height,
      number: number,
      deletar: false,
    });
  }
  RemoveUser(row) {
    const {
      name,
         days,
           weight,
          height,
      number,
      id    
    } = row;
    this.setState({
      id: id,
      name: name, 
      days: days,
      weight: weight,
      height: height,
      number: number,
      deletar: true,
    });
  }

  RegisterUser() {
    var load=document.getElementsByClassName('load')
    const {
      name,
      days,
      weight,     
      number,
      height ,
      id   
    } = this.state;
    const dataUser = {
      name: name,     
      days: days,
      weight: weight,     
      height: height,
      number: number
    };
    if (id) {
      api.put(`/users/${id}`, dataUser, api.headers)
        .then((res) => {
          alert("Alterado com sucesso");
          this.ClearForm();
          this.componentDidMount()
        })
        .catch((err) => {
          alert("Não foi possivel alterar");
        });
    } else {
      load[0].setAttribute('style','visibility:visible')
      api.post("/users", dataUser, api.headers)
      .then((res) => {
        load[0].setAttribute('style','visibility:hidden')
        alert("cadastrado com sucesso ");
        this.componentDidMount()
        this.ClearForm();
      })
      .catch((err) => {
        load[0].setAttribute('style','visibility:hidden')
        if (err.response) {
          alert(err.response.data);
        } else {
          alert("erro ao cadastrar");
          console.log(err);
        }
      });
    }







  
  }
  
  DeleteUser() {
    var load=document.getElementsByClassName('load')
    if (this.state.deletar) {
      load[0].setAttribute('style','visibility:visible')
      api.delete(`/users/${this.state.id}`)
        .then((res) => {
          load[0].setAttribute('style','visibility:hidden')
          alert("usuario deletado com sucesso");
          this.componentDidMount()
          this.ClearForm();
        })
        .catch((err) => {
          load[0].setAttribute('style','visibility:hidden')
          alert(`error ao deletar usuario com id ${this.state.id}`);
        });
    }
  }
  ClearForm() { 
      this.setState({
        name: "",     
        days: "",
        weight: "",      
        height: "",
        number: "",
        id:""      
      }); 
      this.componentDidMount()
   
  }

  render() {
   
    
    return (
      <div>
        <div>
        <img src={Loading} alt="loading" className="load"/>
          <Box boxShadow={0} style={{ marginTop: "20px" }}>
           
            <Grid
              container
              sm={12}
              alignItems="center"
              justify="center"
              className="grid"
            >
              <Grid item sm={3}>
                <TextField
                   id="standard-read-only-input"
                  label="Nome"
                  defaultValue={this.state.name}
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                  
                  floatinglabeltext="Nome"
                  helperText={
                    this.state.nameError
                      ? this.state.nameError
                      : "Nome completo"
                  }
                />
              </Grid>
              <Grid item sm={3}>
                <TextField
                  
                  id="standard-read-only-input"
                  label="Telefone"
                  defaultValue={this.state.number}
                  value={this.state.number}
                  onChange={this.handleChange("number")}
                  
                  floatinglabeltext="Telefone"
                  helperText={
                    this.state.emailError
                      ? this.state.emailError
                      : "Insira seu Telefone"
                  }
                />
              </Grid>
              <Grid item sm={3}>
                <TextField
                  required
                  id="standard-read-only-input"
                  label="Peso"
                  value={this.state.weight}
                  defaultValue={this.state.weight}
                  onChange={this.handleChange("weight")}
                 
                  floatinglabeltext="Peso"
                  helperText={
                    this.state.nameError
                      ? this.state.nameError
                      : "Insira o peso(kg)"
                  }
                />
              </Grid>

              <Grid item sm={3}>
                <TextField
                  required
                id="standard-read-only-input"
                  label="Altura"
                  defaultValue={this.state.height}
                  value={this.state.height}
                  onChange={this.handleChange("height")}
                  
                  floatinglabeltext="Altura"
                  helperText={
                    this.state.nameError
                      ? this.state.nameError
                      : "Insira a altura(M)"
                  }
                />
              </Grid>
            </Grid>
            <Grid
              container
              sm={12}
              alignItems="center"
              justify="left"
              className="grid"
              style={{marginTop:"15px"}}
            >           
              <TextField
              style={{marginRight:'15px',width:"20%"}}
          id="standard-select-currency"
          select
          label="Selecione o Plano"
          value={this.state.days}
          onChange={this.handleChange('days')}
          helperText="Por favor selecione um plano"
        >
             <MenuItem value={30}>30 Dias R$70,00</MenuItem>
                    <MenuItem value={90}>90 Dias R$200,00</MenuItem>
                    <MenuItem value={365}>Anual R$700,00</MenuItem>
         
        </TextField>
            
            
                {this.state.deletar ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.DeleteUser}
                    style={{
                      width: "10%",                     
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
                    onClick={this.RegisterUser}
                    style={{
                      width: "10%",                    
                      marginRight: "5px",
                      backgroundColor: "rgb(76, 175, 80)",
                    }}
                  >
                    {this.state.id ? "Alterar" : "Cadastrar"}
                  </Button>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.ClearForm}
                  style={{
                    width: "10%",                   
                    backgroundColor: "rgba(0, 0, 0, 0.38)",
                  }}
                >
                  Limpar
                </Button>
              </Grid> 

    
          </Box>
        </div>
        <MaterialTable
          style={{ marginTop: "20px" }}
          columns={[           
            { title: "Nome", field: "name" },
            { title: "Plano", field: "days" },
            { title: "Peso", field: "weight" },
            { title: "Altura", field: "height" },
          ]}
          data={this.state.data}
          title="Alunos"
          actions={[
            {
              icon: "edit",
              tooltip: "Edit User",
              onClick: (...data) => this.EditUser(data[1]),
            },
            {
              icon: () => {
                return <DeleteForeverIcon style={{ color: "red" }} />;
              },
              tooltip: "Delete user",
              onClick: (...data) => this.RemoveUser(data[1]),
            },
          ]}
        />
      </div>
    );
  }
}
