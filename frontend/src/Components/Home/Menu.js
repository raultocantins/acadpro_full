import React, { Component } from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
export default class Menu extends Component {

  render(){   
  return (
    <MenuList style={{border:"none!important"}}>
      <Link to="/home/dashboard" style={{outline:'none',textDecoration:"none"}} onClick={()=>this.props.handleTitle('Dashboard')}>
        <MenuItem>
          <ListItemIcon style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:"left",marginBottom:'20px'}}>
           < DashboardIcon style={{marginRight:'10px'}}/>
          <Typography variant="inherit" >Dashboard</Typography>
          </ListItemIcon>
        </MenuItem>
      </Link>
      <Link to="/home/users"  style={{outline:'none',textDecoration:"none"}} onClick={()=>this.props.handleTitle('Alunos')}>
        <MenuItem>
          <ListItemIcon  style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:"left",marginBottom:'20px'}}>
         <GroupIcon style={{marginRight:'10px'}}/>
          <Typography variant="inherit">Alunos</Typography>
          </ListItemIcon>
        </MenuItem>
      </Link>
      <Link to="/home/busines" style={{outline:'none',textDecoration:"none"}} onClick={()=>this.props.handleTitle('Finanças')}>
        <MenuItem >
          <ListItemIcon  style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:"left",marginBottom:'20px'}}>
         <MonetizationOnIcon style={{marginRight:'10px'}}/>
          <Typography variant="inherit">Finanças</Typography>
          </ListItemIcon>
        </MenuItem>
      </Link>
      <Link to="/home/user" style={{outline:'none',textDecoration:"none"}} onClick={()=>this.props.handleTitle('Perfil')}>
        <MenuItem>
          <ListItemIcon  style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:"left"}}>
         <AccountCircleIcon style={{marginRight:'10px'}}/>
          <Typography variant="inherit">Perfil</Typography>
          </ListItemIcon>
        </MenuItem>
      </Link>
    </MenuList>
  )
}
}
