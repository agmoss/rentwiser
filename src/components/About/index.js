import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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


export default function About() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							About
                        </Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							A free and open source tool for rental property analysis!
                        </Typography>
					</Container>
				</div>
				<div className={classes.content}>
					<Container maxWidth="md">
						<Typography variant="h5" align="left" color="textSecondary" paragraph>
							Rentwiser consists of three independent software repositories,
							one for data collection, one for REST API's,  and one for the analytical web application.
							The data collection repository is an ETL pipeline written in Python with a MySQL backend. The web
							application is built in React.js. And the REST API's are built with Django.
                    </Typography>
					</Container>
				</div>
			</main>
		</React.Fragment>
	);
}
