import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';


class LineChart extends Component {

    constructor(props) {
        super(props);
        this.BASE_URL = 'https://api-cr.azurewebsites.net/api';
        this.state = {
            ts: '-',
            chartOptionsArea: {

                chart: {
                    id: 'chartArea',
                    toolbar: {
                        autoSelected: 'pan',
                        show: false
                    },

                },
                colors: ['#546E7A'],
                stroke: {
                    width: 3
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    opacity: 1,
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime'
                }
            },
            chartOptionsBrush: {
                chart: {
                    id: 'chartBrush',
                    brush: {
                        target: 'chartArea',
                        enabled: true
                    },
                    selection: {
                        enabled: true,
                        // xaxis: {
                        //     min: new Date('19 Dec 2018').getTime(),
                        //     max: new Date('30 Sept 2019').getTime()
                        // }
                    },
                },
                colors: ['#008FFB'],
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.91,
                        opacityTo: 0.1,
                    }
                },
                xaxis: {
                    type: 'datetime',
                    tooltip: {
                        enabled: false
                    }
                },
                yaxis: {
                    tickAmount: 2
                },

            },
            series: [
                {
                    name: "timeseries",
                    data: null
                },
            ],
        }

    }

    componentDidMount() {

        // Chart data
        this.getDataFor(`/ts/${this.props.location}/${this.props.propertyType}/1`, 'ts');

    }

    componentDidUpdate() {

        // Chart data
        this.getDataFor(`/ts/${this.props.location}/${this.props.propertyType}/1`, 'ts');
        
    }

    /**
    * **Fetch data at specific endpoint and set state with resulting data.**
    *
    * @param {string} conversion - url extension ontop of base
    * @param {string} value - state variable to get data for
    * 
    * @return {Promise}
    */
    getDataFor(conversion, value) {
        return new Promise((resolve, reject) => {
            fetch(this.BASE_URL + conversion, {
                mode: 'cors'
            })
                .then(res => res.json())
                .then(d => {

                    if (value === 'ts') {

                        var data = this.timeSeries(d)

                        console.log(data);

                        this.setState({
                            series: [
                                {
                                    name: "timeseries",
                                    data: Object.entries(data)
                                }
                            ],
                        })
                    }
                }).then(() => {
                    return resolve();
                }).catch((error) => {
                    return reject(error);
                })
        })
    }

    timeSeries(data) {

        data = data['price']

        return Object.assign({}, ...Object.keys(data).map(k => ({ [new Date(k)]: data[k] })));

    }

    render() {

        return (

            <div id="charts">
                <div id="chart1">
                    <ReactApexChart options={this.state.chartOptionsArea} series={this.state.series} type="line" height="300" />
                </div>
                <div id="chart2">
                    <ReactApexChart options={this.state.chartOptionsBrush} series={this.state.series} type="area" height="100" />
                </div>
            </div>
        );
    }
}

export default LineChart;