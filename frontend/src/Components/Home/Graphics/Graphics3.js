import React, { Component } from "react";
import "./Graphics3.css";
import MaterialTable from 'material-table';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
export default class Graphics3 extends Component {
  state={
    data:[]
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
