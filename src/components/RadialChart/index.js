import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';


class RadialChart extends Component {


    render() {
        return (

            <div id="radialChart">
                <ReactApexChart options={this.props.options} series={this.props.series} type="radialBar" height="200" />
            </div>

        );
    }
}

export default RadialChart;