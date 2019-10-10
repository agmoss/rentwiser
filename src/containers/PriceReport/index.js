import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Presentation Component
import PriceReport from '../../components/PriceReport';

export default function PriceReportContainer(props) {

	const [metrics, setMetrics] = useState({
		mean: 0,
		min: 0,
		max: 0
	})

	useEffect(() => {
		async function fetchData() {
			const responseMean = await axios(`https://api-cr.azurewebsites.net/api/price/mean/${props.location}/${props.community}/${props.propertyType}/1`);
			const responseMin = await axios(`https://api-cr.azurewebsites.net/api/price/min/${props.location}/${props.community}/${props.propertyType}/1`);
			const responseMax = await axios(`https://api-cr.azurewebsites.net/api/price/max/${props.location}/${props.community}/${props.propertyType}/1`);

			setMetrics({
				mean: Number(responseMean.data.val),
				min: Number(responseMin.data.val),
				max: Number(responseMax.data.val)
			})

		}
		fetchData();
	}, [props.location, props.community, props.propertyType]); // Or [] if effect doesn't need props or state (place query here)

	return (
		React.createElement(PriceReport, { mean: metrics.mean, max: metrics.max, min: metrics.min })
	);
}