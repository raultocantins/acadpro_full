import React from "react";
import "./Graphics3.css";
import MaterialTable from 'material-table';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import api from '../../../config/api'
export default class Graphics3 extends React.Component{
  state={
    data:[]
  }
  constructor(props){
    super(props)
this.dataExpired=this.dataExpired.bind(this)
  }
componentDidMount(){
  this.dataExpired();
}
  dataExpired(){
api.get('/expired')
.then(res=>{
this.setState({data:res.data})
})
.catch(err=>{
console.log(err)
})
  }
  render() {
    return (
      
        <MaterialTable
        style={{marginTop:"50px",marginBottom:'50px'}}
          columns={[
            { title: 'ID', field: 'id' },
            { title: 'Nome', field: 'name' },
            { title: 'Plano', field: 'days' }             
            
          
          ]}
          data={this.state.data}
          title="Mensalidades Vencidas"
        
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
      
    );
  }
}
