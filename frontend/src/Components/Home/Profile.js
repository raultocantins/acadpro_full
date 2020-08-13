import React ,{Component}from "react";
import Avatar from "@material-ui/core/Avatar";
import Image from "../../assets/dl.jpg";
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
          variant="h4"
          style={{ width: "100%", height: "50%", marginTop: "10px" }}
        >
          {this.props.name}
        </Typography>
      </div>
    );
  }
}
