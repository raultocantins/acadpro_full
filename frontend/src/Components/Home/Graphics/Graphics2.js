import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Chart from "chart.js";
import "./Graphics.css";
export default class Graphics2 extends Component {
  state = {
    data: [80, 50],
  };

  constructor(props) {
    super(props);
    this.InsertData = this.InsertData.bind(this);
  }
  componentDidMount() {
    this.InsertData();
  }
  InsertData() {
    var ctxD = document.getElementById("doughnutChart").getContext("2d");
    var myLineChart = new Chart(ctxD, {
      type: "doughnut",
      data: {
        labels: [`Homes ${this.state.data[0]}` ,`Mulheres ${this.state.data[1]}`],
        datasets: [
          {
            data: this.state.data,
            backgroundColor: [
                "#46BFBD",             
              "#F7464A"
            ],
            hoverBackgroundColor: [
                "#5AD3D1",
              "#FF5A5E"
             
            ],
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
      <Paper elevation={1}>
        <div className="graphics">
          <canvas id="doughnutChart"></canvas>
        </div>
      </Paper>
    );
  }
}
