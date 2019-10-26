import React, { Component } from 'react';

import ScatterChart from '../../components/ScatterChart';

class ScatterChartContainer extends Component {

	//'columns': ['price', 'sq_feet']

	constructor(props) {
		super(props);
		this.BASE_URL = 'https://api-cr.azurewebsites.net/api';

		this.state = {
			location: this.props.location,
			community: this.props.community,
			propertyType: this.props.propertyType,
			options: {
				chart: {
					zoom: {
						enabled: true,
						type: 'xy'
					},
					toolbar: {
						show: false,
					},
					animations: {
						enabled: true,
						easing: 'easeinout',
						speed: 100,
						animateGradually: {
							enabled: true,
							delay: 150
						},
						dynamicAnimation: {
							enabled: true,
							speed: 100
						}
					}
				},
				xaxis: {
					title: {
						text: "Price"
					}
				},
				yaxis: {
					title: {
						text: "Square Feet"
					}
				}
			},
			series: [
				{
					name: "Price/Sq Feet",
					data: []
				},
			],
		}
	}

	async componentDidMount() {
		await this.chartData();
	}


	async chartData() {
		await this.getDataFor(`/scatter/${this.state.location}/${this.state.community}/${this.state.propertyType}/0`, 'val');
		this.props.updateLoading(false);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {

		// Prevent un necessary re-render
		if (nextProps.location !== this.state.location || nextProps.community !== this.state.community || nextProps.propertyType !== this.state.propertyType) {

			this.props.updateLoading(true);

			this.setState({ location: nextProps.location, community: nextProps.community, propertyType: nextProps.propertyType }, async () => {
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
		console.log('here')
		return (
			React.createElement(ScatterChart, { options: this.state.options, series: this.state.series })
		);
	}
}

export default ScatterChartContainer;
