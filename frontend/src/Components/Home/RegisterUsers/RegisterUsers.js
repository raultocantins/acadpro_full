import { Component } from "react";
import React from "react";
import Step1 from "./RegisterStep1";
import Step2 from "./RegisterStep2";
import api from '../../../config/api'
import "./RegisterUsers.css";
import MaterialTable from 'material-table';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


export default class Registerusers extends Component{
  state={
    id:'',
    deletar:false,
    step:1,    
    name:'',
    email:'',
    number:'',
    days:'',
    height:'',
     weight:'',
    fat:'',
   pressure:'',
   sexo:'',
   birth:'',
  url:'',
    page:0,
    rowsPerPage:5,
  data:[]
  }
constructor(props){
  super(props)

this.handleChange=this.handleChange.bind(this)
this.nextStep=this.nextStep.bind(this)
this.EditUser=this.EditUser.bind(this)
this.RemoveUser=this.RemoveUser.bind(this)
this.RegisterUser=this.RegisterUser.bind(this)
this.AlterUser=this.AlterUser.bind(this)
this.DeleteUser=this.DeleteUser.bind(this)
this.ClearForm=this.ClearForm.bind(this)

}  
componentDidMount(){ 
 
api.get('/users',{},api.headers)
  .then(res=>{
this.setState({data:res.data})

  })
  .catch(err=>{
    if(err.response){

      alert(err.response.data)
    }else{
      console.log(err)
    }
  })
}

nextStep = () => {
  const { step } = this.state;
  this.setState({ step: step + 1 });
};
prevStep = () => {
  const { step } = this.state;
  this.setState({ step: step - 1 });
};
handleChange = (input) => (e) => {
  this.setState({ [input]: e.target.value });
};
EditUser(row){
  const{name,email,url,days,birth,weight,fat,pressure,height,number,id,sexo}=row
this.setState({ 
  id:id,
name:name,
email:email,
birth:birth,
url:url,
days:days,
weight:weight,
fat:fat,
sexo:sexo,
height:height,
number:number,
step:2,
deletar:false
})

}
RemoveUser(row){
  const{name,email,url,days,birth,weight,fat,pressure,height,number,id,sexo}=row
  this.setState({
    id:id, 
  name:name,
  email:email,
  birth:birth,
  url:url,
  days:days,
  weight:weight,
  fat:fat,
 sexo:sexo,
  height:height,
  number:number,
  step:2,
  deletar:true
  })
}
RegisterUser(){
  const {name,email,birth,url,days,weight,fat,pressure,number,height,sexo}=this.state
  const dataUser={
    name:name,
    email:email,
    birth:birth,
    url:url,
    days:days,
    weight:weight,
    fat:fat,
   sexo:sexo,
    height:height,
    number:number
  }
  api.post('/users',dataUser,api.headers)
.then(res=>{
alert('cadastrado com sucesso ')
this.ClearForm()
})
.catch(err=>{
if(err.response){
  alert(err.response.data)
}else{
  alert('erro ao cadastrar')
  console.log(err)

}

})

}
AlterUser(){
  const {name,email,birth,url,days,weight,fat,pressure,number,height,id,sexo}=this.state
  const dataUser={
    name:name,
    email:email,
    birth:birth,
    url:url,
    days:days,
    weight:weight,
    fat:fat,
    sexo:sexo,
    height:height,
    number:number
  }
  if(id){
    api.put(`/users/${id}`,dataUser,api.headers)
    .then(res=>{
    alert('Alterado com sucesso')  
    this.ClearForm()
    })
    .catch(err=>{  
      alert('Não foi possivel alterar')  
    })
  }else{
    alert('id invalido')
  }
 
}
DeleteUser(){
  if(this.state.deletar){

    api.delete(`/users/${this.state.id}`)
    .then(res=>{
      alert('usuario deletado com sucesso')
      this.ClearForm()
    })
    .catch(err=>{
      alert(err)
    })
  }

}
ClearForm(){
  this.setState({
    name:'',
    email:'',
    birth:'',
    url:'',
    days:'',
    weight:'',
    fat:'',
    sexo:'',
    height:'',
    number:'',
  step:2  })

}

render(){
  const {name,email,number,days,height,weight,fat,pressure,birth,url,id,deletar,sexo}=this.state
  const values={name,email,number,days,height,weight,fat,pressure,birth,url,id,deletar,sexo}
  return(
    <div >
       {this.state.step === 1 ? (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values} 
           ClearForm={this.ClearForm}
                  
          />
        ) : (
          <Step2
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            RegisterUser={this.RegisterUser}
            AlterUser={this.AlterUser}
            DeleteUser={this.DeleteUser}
            />
        )}           
     <MaterialTable
     style={{marginTop:'20px'}}
          columns={[
            { title: 'ID', field: 'id' },
            { title: 'Nome', field: 'name' },
            { title: 'Plano', field: 'days' },
            { title: 'Peso', field: 'weight' },
            { title: 'Altura', field: 'height' },          
            
          
          ]}
          data={this.state.data}
          title="Alunos"
          actions={[
            {
              icon: 'edit',
              tooltip: 'Edit User',
              onClick:(...data)=>this.EditUser(data[1])
            },
            {
              icon:()=>{return <DeleteForeverIcon style={{color:'red'}}/>},
              tooltip: 'Delete user',
              onClick: (...data)=>this.RemoveUser(data[1])
            }
          ]}
        />
          </div>
          
  )
}
  }
