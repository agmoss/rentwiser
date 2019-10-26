import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Presentation Component
import MarketReport from '../../components/MarketReport';

export default function MarketReportContainer(props) {

	const [listingCount, setListingCount] = useState({
		active: 0,
		total: 0
	})

	useEffect(() => {
		async function fetchData() {
			const responseActive = await axios(`https://api-cr.azurewebsites.net/api/count/${props.location}/${props.community}/${props.propertyType}/1`);
			const responseTotal = await axios(`https://api-cr.azurewebsites.net/api/count/${props.location}/${props.community}/${props.propertyType}/0`);

			setListingCount({
				active: Number(responseActive.data.count),
				total: Number(responseTotal.data.count)
			})
		}
		fetchData();
	}, [props.location, props.community, props.propertyType]); // Or [] if effect doesn't need props or state (place query here)

	return (
		React.createElement(MarketReport, { location: props.location, community: props.community, propertyType: props.propertyType, active: listingCount.active, total: listingCount.total })
	);
}
