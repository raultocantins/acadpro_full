import { Component } from "react";
import React from "react";
import Step1 from "./RegisterStep1";
import Step2 from "./RegisterStep2";
import "./RegisterUsers.css";
export default class RegisterUsers extends Component {
  state = {
    step: 1,
    del:false,
    name: "",
    email: "", 
    number: "",   
    kit: "",   
    url: "",
    date: "",
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  handleChange = (input) => (e) => {
    console.log(input);
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, name, email, number, kit, url, date,del } = this.state;
    const values = {
      step,
      name,
      email,
      number,
      kit,
      url,
      date,
      del
    };

    return (
      <div>
        {this.state.step === 1 ? (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        ) : (
          <Step2
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )}
        <div className="container-user">
          <h1>container user</h1>
        </div>
      </div>
    );
  }
}
