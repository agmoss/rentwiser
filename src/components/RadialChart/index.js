import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';


class RadialChart extends Component {

    constructor(props) {
        super(props);
        this.BASE_URL = 'https://api-cr.azurewebsites.net/api';
        this.state = {
            val: 0,
            options: {
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: ['Market Share']
            },
            series: [0],
        }
    }


    componentDidMount() {

        // Chart data
        this.getDataFor(`/market/${this.props.location}/${this.props.community}/${this.props.propertyType}/1`, 'val');

    }

    componentDidUpdate() {

        // Chart data
        this.getDataFor(`/market/${this.props.location}/${this.props.community}/${this.props.propertyType}/1`, 'val');

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

                    if (value === 'val') {

                        this.setState({
                            series: [
                                (d.ms * 100).toFixed(2)
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

    render() {
        return (

            <div id="radialChart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height="200" />
            </div>

        );
    }
}

export default RadialChart;