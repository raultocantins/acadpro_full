import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Chart from "chart.js";
import "./Graphics.css";

export default class Graphics extends Component {
  state = {
    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 356],
  };

  constructor(props) {
    super(props);
    this.InsertData = this.InsertData.bind(this);
  }
  componentDidMount() {
    this.InsertData();
  }
  InsertData() {
    var ctxL = document.getElementById("lineChart").getContext("2d");
    var myLineChart = new Chart(ctxL, {
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
      <Paper elevation={0}>
        <div className="graphics">
          <canvas id="lineChart"></canvas>
        </div>
      </Paper>
    );
  }
}
