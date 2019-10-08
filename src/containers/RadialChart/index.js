import React, { Component } from 'react';

// Presentation Component
import RadialChart from '../../components/RadialChart';

class RadialChartContainer extends Component {

    constructor(props) {
        super(props);
        
        this.BASE_URL = 'https://api-cr.azurewebsites.net/api';
        this.state = {
            location: this.props.location,
            community:this.props.community,
            propertyType:this.props.propertyType,
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
        this.chartData()
    }

    chartData(){
        this.getDataFor(`/market/${this.state.location}/${this.state.community}/${this.state.propertyType}/1`, 'val');
    }

    componentWillReceiveProps(nextProps){

        // Prevent un necessary re-render
        if (nextProps.location !== this.state.location || nextProps.community !== this.state.community || nextProps.propertyType !== this.state.propertyType) {

            this.setState({location: nextProps.location,community: nextProps.community, propertyType: nextProps.propertyType}, async () => {
                this.chartData();
            });
        }
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

            React.createElement(RadialChart, { options: this.state.options, series: this.state.series })
            
        );
    }
}

export default RadialChartContainer;