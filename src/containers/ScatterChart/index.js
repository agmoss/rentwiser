import React, { Component } from 'react';

import ScatterChart from '../../components/ScatterChart';

class ScatterChartContainer extends Component {

    //'columns': ['price', 'sq_feet']

    constructor(props) {
        super(props);
        this.BASE_URL = 'https://api-cr.azurewebsites.net/api';

        this.state = {
            options: {
                chart: {
                    zoom: {
                        enabled: true,
                        type: 'xy'
                    },
                    toolbar: {
                        show: false,
                    },
                },
                xaxis:{
                    title:{
                        text:"Price"
                    }
                },
                yaxis:{
                    title:{
                        text:"Square Feet"
                    }
                }
            },
            series: [
                {
                    name: "Price/Sq Feet",
                    data: null
                },
            ],
        }
    }

    componentDidMount() {

        // Chart data
        this.getDataFor(`/scatter/${this.props.location}/${this.props.community}/${this.props.propertyType}/1`, 'val');

    }

    componentDidUpdate() {

        // Chart data
        this.getDataFor(`/scatter/${this.props.location}/${this.props.community}/${this.props.propertyType}/1`, 'val');

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
                                {
                                    name: "Price/Sq Feet",
                                    data: d
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

    render() {
        return (
            React.createElement(ScatterChart, { options: this.state.options, series: this.state.series })
        );
    }
}

export default ScatterChartContainer;