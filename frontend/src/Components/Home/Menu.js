import React, { Component } from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import iconDashboard from '../../assets/velocimetro.svg'
import iconUsers from '../../assets/equipe.svg'
import iconLucros from '../../assets/lucros.svg'
import iconProfile from '../../assets/profile.svg'

export default class Menu extends Component {
constructor(props){
  super(props)

}



  render(){
    const {handleTitle}=this.props
  return (
    <MenuList>
      <Link to="/home/dashboard" style={{outline:'none',textDecoration:"none"}}>
        <MenuItem>
          <ListItemIcon style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:"left",marginBottom:'20px'}}>
            <img src={iconDashboard} style={{height:'40px',width:'40px',marginRight:'10px'}}/>
          <Typography variant="inherit" >Dashboard</Typography>
          </ListItemIcon>
        </MenuItem>
      </Link>
      <Link to="/home/users"  style={{outline:'none',textDecoration:"none"}}>
        <MenuItem>
          <ListItemIcon  style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:"left",marginBottom:'20px'}}>
          <img src={iconUsers} style={{height:'40px',width:'40px',marginRight:'10px'}}/>
          <Typography variant="inherit">Alunos</Typography>
          </ListItemIcon>
        </MenuItem>
      </Link>
      <Link to="/home/busines" style={{outline:'none',textDecoration:"none"}}>
        <MenuItem >
          <ListItemIcon  style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:"left",marginBottom:'20px'}}>
          <img src={iconLucros} style={{height:'40px',width:'40px',marginRight:'10px'}}/>
          <Typography variant="inherit">Finanças</Typography>
          </ListItemIcon>
        </MenuItem>
      </Link>
      <Link to="/home/user" style={{outline:'none',textDecoration:"none"}}>
        <MenuItem>
          <ListItemIcon  style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:"left"}}>
          <img src={iconProfile} style={{height:'40px',width:'40px',marginRight:'10px'}}/>
          <Typography variant="inherit">Perfil</Typography>
          </ListItemIcon>
        </MenuItem>
      </Link>
    </MenuList>
  )
}
}
