import React, { Component } from "react";
import api from '../../api'
import Axios from 'axios'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'alex raul santo',
            email: 'alexbraul.arrr@gmail.com',
            password: '',
            confirmPassword: '',
            number: '',
            days: '',
            height: '',
            weight: '',
            fat: '',
            pressure: '',
            birth: '',
            url: '',
            data: []
        }
        this.Logout = this.Logout.bind(this)
        this.registerUser = this.registerUser.bind(this)
    }
    componentDidMount() {
        Axios.post('http://localhost:4000/validateToken', JSON.parse(window.localStorage.getItem('logToken')))
            .then((res) => {
                var data = res.data
                this.setState({ ...this.state.data, data })
                api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

            })
            .catch(err => {
                this.props.history.push("/signin");
                console.log(err)
            })
    }
    Logout() {
        window.localStorage.removeItem('logToken')
        api.defaults.headers.Authorization = `Bearer `
        this.props.history.push("/");
    }
    registerUser() {
        const { name, email, password } = this.state
        api.post('/users', { name, email, password })
            .then(res => {
                alert('cadastrado com sucesso!')
            })
            .catch(err => {
                if (err.response.status === 401) {
                    window.localStorage.removeItem('logToken')
                    api.defaults.headers.Authorization = `Bearer `
                    this.props.history.push("/");
                }else{
                    alert(err.response.data)
                }

            })    }
    render() {

        return (<div>
            <h1>pagina principal home</h1>
            <p>Bem vindo {this.state.data.name}</p>
            <input type='text' value={this.state.name} placeholder='name' />
            <input type='text' value={this.state.email} placeholder='email' />
            <input type='text' value={this.state.password} placeholder='password' />
            <button onClick={this.registerUser}>cadastrar user</button>
            <button onClick={this.Logout}>Sair</button>

        </div>)




    }
}




