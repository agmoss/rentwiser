import React from 'react';
import clsx from 'clsx';

// MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home'
import BarChartIcon from '@material-ui/icons/BarChart';
import MapIcon from '@material-ui/icons/Map';
import InformationIcon from '@material-ui/icons/Info';
import PinIcon from '@material-ui/icons/PinDrop';

// Components
import SampleContent from '../SampleContent';
import MapContainer from '../../containers/MapContainer';
import { Dashboard } from '../Dashboard';
import { secondaryListItems } from '../ListItems';
import About from '../About';
import Home from '../Home';

// Functions and Variables
import { Copyright, ListItemLink } from '../../functions';
import useStyles from '../../var';


export default function Main() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const [currentSelection, setCurrentSelection] = React.useState('home');
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleClick = (val) => {
		setCurrentSelection(val);
	}
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2)

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
					>
						<MenuIcon />
					</IconButton>
					<PinIcon className={classes.icon} />
					<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
						RentWiser
          			</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItemLink button onClick={() => handleClick('home')}>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItemLink>
					<ListItemLink button onClick={() => handleClick('dashboard')}>
						<ListItemIcon>
							<BarChartIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItemLink>
					<ListItemLink button onClick={() => handleClick('map')}>
						<ListItemIcon>
							<MapIcon />
						</ListItemIcon>
						<ListItemText primary="Map" />
					</ListItemLink>
					<ListItemLink button onClick={() => handleClick('about')}>
						<ListItemIcon>
							<InformationIcon />
						</ListItemIcon>
						<ListItemText primary="About" />
					</ListItemLink>
				</List>
				<Divider />
				<List>{secondaryListItems}</List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>

					{(() => {

						switch (currentSelection) {
							case 'home':
								return <Home />
							case 'dashboard':
								return <Dashboard fixedHeightPaper={fixedHeightPaper} fixedHeightPaper2={fixedHeightPaper2} classesPaper={classes.paper} />
							case 'map':
								return <MapContainer />
							case 'about':
								return <About />
							default:
								return <SampleContent content={currentSelection} />
						}
					})()}

				</Container>
				<Copyright />
			</main>
		</div>
	);
}