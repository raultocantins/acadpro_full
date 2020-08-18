import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import RegisterUsers from '../RegisterUsers/RegisterUsers'
export default class Users extends Component {
  state = {
    name: "",
    step:1,
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    return (
      <div className="container-users">
        <Grid
          container
          sm={12}
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <Grid item sm={12} style={{display:'flex',alignItems:'center',justifyContent:"center"}}>
            <Paper elevation={0} style={{width:'90%'}}>         
             <RegisterUsers/>
            </Paper>
          </Grid>

         
        </Grid>
      </div>
    );
  }
}
