import React from 'react'
import './Home.css'
export default class Alert extends React.Component{
    constructor(props){
        super(props)
        this.fechar=this.fechar.bind(this)
    }
  fechar(){
      this.props.fechar(2)
  }
    render(){
        return(
            <div className={this.props.success?"alertSuccess":"alertError"} style={this.props.msg?{display:"flex"}:{display:"none"}}>
                <div className="text">
                <h3>{this.props.msg}</h3>
                </div>
                <button onClick={this.fechar} className="btnAlert">x</button>
            </div>
        )
    }
}