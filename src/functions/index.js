import React from 'react';

// MaterialUI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';


export function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Andrew Moss
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}


export function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}
