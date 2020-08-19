import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Graphics from "../Graphics/Graphics";
import Graphics2 from "../Graphics/Graphics2";
import Graphics3 from "../Graphics/Graphics3";
import "./Dashboard.css";
export default class Dashboard extends Component {
  
  render() {
    return (
      <div className="container-dashboard">
        <Grid container sm={12} style={{display:'flex',justifyContent:"space-around",marginTop:'15px',alignItems:'center'}}>
          <Grid item sm={5}>
            <Graphics />           
          </Grid>
          <Grid item sm={5}>
            <Graphics2  />           
          </Grid>
        <Grid item sm={11} >
        <Graphics3 /> 
        </Grid>
        </Grid>
      </div>
    );
  }
}