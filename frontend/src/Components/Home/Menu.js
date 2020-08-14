import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import {Link} from 'react-router-dom'



export default function TypographyMenu() {
 

  return (
 
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <Typography variant="inherit" >
            <Link to='/home/dashboard'>Dashboard</Link>
           </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon  />
          </ListItemIcon>
          <Typography variant="inherit" >
            <Link to='/home/users'>users</Link>
           </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon  />
          </ListItemIcon>
          <Typography variant="inherit" >
            <Link to='/home/busines'>Busines</Link>
           </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon  />
          </ListItemIcon>
          <Typography variant="inherit" >
            <Link to='/home/user'>Profile</Link>
           </Typography>
        </MenuItem>
      </MenuList>
    
  );
}