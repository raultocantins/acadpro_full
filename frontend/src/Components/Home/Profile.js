import React ,{Component}from "react";
import Avatar from "@material-ui/core/Avatar";
import Image from "../../assets/academia.svg";
import Typography from "@material-ui/core/Typography";
import "./Profile.css";


export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <Avatar
          src={Image}
          alt="profile"
          style={{ width: "100px", height: "50%", marginTop: "10px" }}
          className="avatar"
          
        />
        <Typography
          variant="h5"
          style={{ width: "100%", height: "50%", marginTop: "10px" }}
        >
          { this.props.name.substring(0, (this.props.name + " ").indexOf(" "))}
        </Typography>
       
      </div>
    );
  }
}
