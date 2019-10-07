import React from 'react';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles({
	depositContext: {
		flex: 1,
	},
	card: {
		minWidth: 275,
		minHeight: '100%'
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 1,
	},

});

export default function Report(props) {

	const classes = useStyles();

	return (

		<Grid item xs={12} md={4} lg={3}>

			<Card className={classes.card}>

				<CardHeader
					color="primary"
					title="Price Report"
				/>

				<CardContent>

					<Typography variant="h6">
						Mean
          			</Typography>

					<Typography variant='subtitle1'>
						{(props.mean).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
					</Typography>

					<Typography variant="h6">
						Max
          				</Typography>

					<Typography >
						{(props.max).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
					</Typography>

					<Typography variant="h6">
						Min
          				</Typography>

					<Typography >
						{(props.min).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
					</Typography>

				</CardContent>

				<CardActions>
					<Typography color="textSecondary" className={classes.depositContext}>
						{new Date().getTime()}
					</Typography>
				</CardActions>

			</Card>

		</Grid>

	);
}