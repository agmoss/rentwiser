import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

// Not in use
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
                        xaxis: {
                            min: new Date('19 Dec 2018').getTime(),
                            max: new Date('14 Sept 2019').getTime()
                        }
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
                    name: "Appartment",
                    data: null
                },
                {
                    name: "Townhouse",
                    data:null
                },
                {
                    name: "House",
                    data:null
                },
                {
                    name: "Duplex",
                    data:null
                },
                {
                    name: "Condo",
                    data:null
                }
            ],
        }

    }

    componentDidMount() {

        // Chart data
        this.getDataFor('/ts_data', 'ts');

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

                        var appart = this.timeSeries(d,"Apartment");
                        var town = this.timeSeries(d,"Townhouse");
                        var house = this.timeSeries(d,"House");
                        var duplex = this.timeSeries(d,"Duplex");
                        var condo = this.timeSeries(d,"Condo");


                        this.setState({
                            series: [
                                {
                                    name: "Appartment",
                                    data: Object.entries(appart)
                                },
                                {
                                    name: "Townhouse",
                                    data:Object.entries(town)
                                },
                                {
                                    name: "House",
                                    data:Object.entries(house)
                                },
                                {
                                    name: "Duplex",
                                    data:Object.entries(duplex)
                                },
                                {
                                    name: "Condo",
                                    data:Object.entries(condo)
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

    timeSeries(data,type) {

        data = data[type]

        let newObj = Object.assign({}, ...Object.keys(data).map(k => ({[new Date(k)] : data[k].toFixed(2)} )));

        return newObj;

    }

    render() {

        return (

            <div id="charts">
                <div id="chart1">
                    <ReactApexChart options={this.state.chartOptionsArea} series={this.state.series} type="line" height="200" />
                </div>
                <div id="chart2">
                    <ReactApexChart options={this.state.chartOptionsBrush} series={this.state.series} type="area" height="130" />
                </div>
            </div>
        );
    }
}

export default LineChart;