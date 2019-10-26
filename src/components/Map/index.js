import React from 'react';

// MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Leaflet
import {
	CircleMarker,
	Map,
	TileLayer,
	Tooltip,
} from "react-leaflet";

//import HeatmapLayer from 'react-leaflet-heatmap-layer';

import "leaflet/dist/leaflet.css";


const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2),
	},
}));

export default function ListingMap(props) {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Container component="main" className={classes.main} >
				<Map
					style={{ height: "60vh", width: "100%" }}
					zoom={12}
					center={[51.0486, -114.0708]}>
					<TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

					{/* <HeatmapLayer
						points={props.mapData}
						longitudeExtractor={m => m.longitude}
						latitudeExtractor={m => m.latitude}
						intensityExtractor={m => parseFloat(m.price)} /> */}

					{props.mapData.map((listing) => {
						return (
							<CircleMarker
								center={[listing.latitude, listing.longitude]}
								radius={4}
								fillOpacity={1}
								stroke={false}
							>
								<Tooltip direction="right" offset={[-8, -2]} opacity={1}>
									<span>{`Price: ${listing.price} Sq Feet:  ${listing.sq_feet}`}</span>
								</Tooltip>
							</CircleMarker>
						)
					})
					}
				</Map>
			</Container>
		</div>
	)
}
