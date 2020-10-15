import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Chart from "chart.js";
import "./Graphics.css";
import api from '../../../config/api'
import Loading from '../../../assets/loading.svg'
export default class Graphics extends Component {
  state = {
    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 356],
  };

  constructor(props) {
    super(props);
    this.InsertData = this.InsertData.bind(this);
    this.data=this.data.bind(this)
  }
  componentDidMount() {
    this.data()
    this.InsertData();
  }
data(){
  var load=document.getElementsByClassName('loadgraf')
  load[0].setAttribute('style','visibility:visible')
api.get('/data')
.then(res=>{  
  load[0].setAttribute('style','visibility:hidden') 
this.setState({data:res.data})
})
.catch(err=>{
  if(load){
    load[0].setAttribute('style','visibility:hidden')  
  }    

})

}

  InsertData() {
    var ctxL = document.getElementById("lineChart").getContext("2d");
  new Chart(ctxL, {
      type: "line",
      data: {
        labels: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
        datasets: [
          {
            label: `Gráfico de Alunos ${new Date().getFullYear()}`,
            data: this.state.data,
            backgroundColor: ["rgba(0, 137, 132, .2)"],
            borderColor: ["rgba(0, 10, 130, .7)"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }

  render() {
    return (
      <Paper elevation={3} >
        <div className="graphics">
        <img src={Loading} alt="loading" className="loadgraf"/>
          <canvas id="lineChart" ></canvas>
        </div>
      </Paper>
    );
  }
}
