import React from 'react';

// Material UI
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home'
import BarChartIcon from '@material-ui/icons/BarChart';
import MapIcon from '@material-ui/icons/Map';
import InformationIcon from '@material-ui/icons/Info'
import AssignmentIcon from '@material-ui/icons/Assignment';


function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
	<div>
		<ListItemLink button href="/">
			<ListItemIcon>
				<HomeIcon />
			</ListItemIcon>
			<ListItemText primary="Home" />
		</ListItemLink>
		<ListItemLink button href="/dashboard">
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItemLink>
		<ListItemLink button href="/map">
			<ListItemIcon>
				<MapIcon />
			</ListItemIcon>
			<ListItemText primary="Map" />
		</ListItemLink>
		<ListItemLink button href="/about">
			<ListItemIcon>
				<InformationIcon />
			</ListItemIcon>
			<ListItemText primary="About" />
		</ListItemLink>
	</div>
);

export const secondaryListItems = (
	<div>
		<ListSubheader inset>Source</ListSubheader>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Source1" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Source2" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Source3" />
		</ListItem>
	</div>
);
