import React, { Component } from 'react';
import Chart from "chart.js";

import CardBasic from '../../Cards/Basic';

class ChartDonut extends Component {
    chartRef = React.createRef();

    componentDidMount() {

        const myPieChart = this.chartRef.current.getContext("2d");
        console.log(this.chartRef);

        new Chart(myPieChart, {
            type: 'doughnut',
            data: {
                labels: ["Psych", "Math", "Biology", "Biology Lab", "Computer Science"],
                datasets: [{
                    data: [1, 1, 1, 1, 1],
                    backgroundColor: ['#ff4a4a', '#fcba03', '#00c760', '#00a3c7', '#997aff'],
                    hoverBackgroundColor: [],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "rgb(255,255,255)",
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 80,
            },
        });
    }

    render() {
        return (
            <CardBasic title="Weekly Homework Completion">
                 <div className="chart-pie pt-4">
                        <canvas id="myPieChart" ref={this.chartRef}></canvas>
                    </div>
                    <hr />
                    Psych: <code>0</code> assignments left. <b>All assignments complete!</b><hr />
                    Math: <code>2</code> assignments left<hr />
                    Biology: <code>1</code> assignments left<hr />
                    Biology Lab: <code>1</code> assignments left<hr />
                    Computer Science: <code>3</code> assignments left<hr />
            </CardBasic>
        )
    }
}

export default ChartDonut;