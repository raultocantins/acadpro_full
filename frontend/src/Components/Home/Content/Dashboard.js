import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Graphics from "../Graphics/Graphics";
import Graphics2 from "../Graphics/Graphics2";
import "./Dashboard.css";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-dashboard">
        <Grid container sm={12} style={{display:'flex',justifyContent:"space-around",marginTop:'15px'}}>
          <Grid item sm={5}>
            <Graphics />           
          </Grid>
          <Grid item sm={5}>
            <Graphics2  />           
          </Grid>
        </Grid>
      </div>
    );
  }
}
