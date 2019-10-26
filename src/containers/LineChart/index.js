import React, { Component } from 'react';

// Presentation Component
import LineChart from '../../components/LineChart';

var data = [];
class LineChartContainer extends Component {

	constructor(props) {
		super(props);
		this.BASE_URL = 'https://api-cr.azurewebsites.net/api';
		this.state = {
			location: this.props.location,
			community: this.props.community,
			propertyType: this.props.propertyType,
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
					data: data
				},
			],
		}

	}

	async componentDidMount() {
		await this.chartData();
	}

	async chartData() {
		await this.getDataFor(`/ts/${this.state.location}/${this.state.community}/${this.state.propertyType}/0`, 'ts');
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

					if (value === 'ts') {

						var data = this.timeSeries(d)

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
			React.createElement(LineChart, { chartOptionsArea: this.state.chartOptionsArea, chartOptionsBrush: this.state.chartOptionsBrush, series: this.state.series })
		)

	}
}

export default LineChartContainer;
