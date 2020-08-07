import { Component } from 'react'
import React from 'react';
import DetailsRedesSocias from './DetailsRedesSociais'
import DetailsPersonal from './DetailsPersonal'
import Package from './Package'
import Success from './Success'
import Verif from './Verif'
export default class Signup extends Component {
    state = {
        step: 1,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        facebook: "",
        number: "",
        instagram: "",
        kit: "",
        cep: "",
        url: "",
        progress: '0'
    }
    nextStep = () => {
        const { step } = this.state
        this.setState({ step: step + 1 })
    }
    prevStep = () => {
        const { step } = this.state
        this.setState({ step: step - 1 })
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }
    progressBar(step) {
        switch (step) {
            case 1: return 20;
            case 2: return 40;
            case 3: return 60;
            case 4: return 80;
            case 5: return 100;
            default: return 0;

        }
    }
    render() {

        const { step, name, email, password, confirmPassword, facebook, number, instagram, kit, cep, url } = this.state
        const values = { step, name, email, password, confirmPassword, facebook, number, instagram, kit, cep, url }




    
        switch (step) {            
            case 1: return (<DetailsPersonal
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                progressBar={this.progressBar}

            />)

            case 2: return (<DetailsRedesSocias
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                progressBar={this.progressBar}

            />)

            case 3: return (<Package
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                progressBar={this.progressBar}

            />)
            case 4: return (<Verif
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                progressBar={this.progressBar}

            />)

            case 5: return (
                <Success
                    progressBar={this.progressBar}
                    step={this.state.step}
                />)

            default: return (<DetailsPersonal />)
           
        }
        

    }
}