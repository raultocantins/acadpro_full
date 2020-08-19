import { Component } from "react";
import React from "react";
import Step1 from "./RegisterStep1";
import Step2 from "./RegisterStep2";
import api from '../../../api'
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
   birth:'',
  url:'',
    page:0,
    rowsPerPage:5,
  data:[
    {id:1,name:'Cupcake teste',days:90,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    {id:2,name:'Cupcake',days:30,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    {id:3,name:'Cupcake',days:30,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    {id:4,name:'Cupcake',days:30,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    {id:5,name:'Cupcake',days:30,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    {id:6,name:'Cupcake',days:30,weight:80,height:1.99,url:'www.faceboo.com/imagens',fat:40,pressure:12.8,birth:'10/02/1990',number:63992086480,email:'alexbraul.ar@gmail.com'},
    ]
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
  api.get('/users')
  .then(res=>{
this.setState({data:res.data})
  })
  .catch(err=>{
    console.log(err)
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
  const{name,email,url,days,birth,weight,fat,pressure,height,number,id}=row
this.setState({ 
  id:id,
name:name,
email:email,
birth:birth,
url:url,
days:days,
weight:weight,
fat:fat,
pressure:pressure,
height:height,
number:number,
step:2,
deletar:false
})

}
RemoveUser(row){
  const{name,email,url,days,birth,weight,fat,pressure,height,number,id}=row
  this.setState({
    id:id, 
  name:name,
  email:email,
  birth:birth,
  url:url,
  days:days,
  weight:weight,
  fat:fat,
  pressure:pressure,
  height:height,
  number:number,
  step:2,
  deletar:true
  })
}
RegisterUser(){
  const {name,email,birth,url,days,weight,fat,pressure,number,height}=this.state
  const dataUser={
    name:name,
    email:email,
    birth:birth,
    url:url,
    days:days,
    weight:weight,
    fat:fat,
    pressure:pressure,
    height:height,
    number:number
  }
  api.post('/users',dataUser)
.then(res=>{
alert('cadastrado com sucesso ')
})
.catch(err=>{
alert('erro ao cadastrar')
})

}
AlterUser(){
  const {name,email,birth,url,days,weight,fat,pressure,number,height,id}=this.state
  const dataUser={
    name:name,
    email:email,
    birth:birth,
    url:url,
    days:days,
    weight:weight,
    fat:fat,
    pressure:pressure,
    height:height,
    number:number
  }
  if(id){
    api.put(`/users/${id}`,dataUser)
    .then(res=>{
    alert('Alterado com sucesso')
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
    pressure:'',
    height:'',
    number:'',
  step:2  })

}

render(){
  const {name,email,number,days,height,weight,fat,pressure,birth,url,id,deletar}=this.state
  const values={name,email,number,days,height,weight,fat,pressure,birth,url,id,deletar}
  return(
    <div>
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
          columns={[
            { title: 'ID', field: 'id' },
            { title: 'Nome', field: 'name' },
            { title: 'Plano', field: 'days' },
            { title: 'Peso', field: 'weight' },
            { title: 'Altura', field: 'height' },          
            
          
          ]}
          data={this.state.data}
          title="Demo Title"
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
