import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
	content: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	}
}));


export default function Home() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<div className={classes.heroContent}>
				<Container maxWidth="sm">
					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
						RentWiser
                        </Typography>
					<Typography variant="h5" align="center" color="textSecondary" paragraph>
						A free and open source tool for rental property analysis!
                        </Typography>
				</Container>
			</div>
			<div className={classes.content}>
				<Container maxWidth="md">
					<Grid container spacing={4} justify="space-evenly">
						<img alt="Appart" src={process.env.PUBLIC_URL + '/appartments.png'} width="200" height="200" />
					</Grid>
				</Container>
			</div>
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					This is a work in progress
                </Typography>
			</footer>
		</React.Fragment>
	);
}
