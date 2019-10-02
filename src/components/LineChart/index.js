import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';


class LineChart extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {

        return (

            <div id="lineCharts">
                <div id="lineChart1">
                    <ReactApexChart options={this.props.chartOptionsArea} series={this.props.series} type="line" height="300" />
                </div>
                <div id="lineChart2">
                    <ReactApexChart options={this.props.chartOptionsBrush} series={this.props.series} type="area" height="100" />
                </div>
            </div>
        );
    }
}

export default LineChart;