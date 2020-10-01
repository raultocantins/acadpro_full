import { Component } from 'react'
import React from 'react';
import DetailsPersonal from './DetailsPersonal'
import Success from './Success'
import Verif from './Verif'
export default class Signup extends Component {
    state = {
        step: 1,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        cod:""        
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
        var low_text=e.target.value.toLowerCase()  
        this.setState({ [input]: low_text })
    }
   
    render() {

        const { step, name, email, password, confirmPassword,cod } = this.state
        const values = { step, name, email, password, confirmPassword, cod}
    
        switch (step) {            
            case 1: return (<DetailsPersonal
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}                

            />)         
            
            case 2: return (<Verif
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}               

            />)
            case 3: return (
                <Success                    
                    step={this.state.step}
                />)
            default: return (<DetailsPersonal />)
           
        }
        

    }
}