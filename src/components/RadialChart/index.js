import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';


class RadialChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['Cricket']
            },
            series: [70],
        }
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height="200" />
            </div>

        );
    }
}

export default RadialChart;