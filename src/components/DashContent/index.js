import React, { useState } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Components
import LineChart from '../LineChart';
import Report from '../Report';
import RadialChart from '../RadialChart';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const DashContent = (props) => {

    const classes = useStyles();

    const [propertyType, setPropertyType] = useState('all');
    const [location, setLocation] = useState('all');

    function handlePtypeChange(event) {
        setPropertyType(event.target.value)
    }

    function handleLocationChange(event) {
        setLocation(event.target.value)
    }

    /**
     * **Render the presentation component**
     */
    return (

        <React.Fragment>
            <Grid container spacing={3}>
                {/* Select */}
                <Grid item xs={12} md={12} lg={12}>
                    <Paper>
                        <form className={classes.root} autoComplete="off">
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="location-simple">Location</InputLabel>
                                <Select
                                    value={location}
                                    onChange={handleLocationChange}
                                    inputProps={{
                                        name: 'location',
                                        id: 'location-simple',
                                    }}
                                >
                                    <MenuItem value={'NW'}>NW</MenuItem>
                                    <MenuItem value={'NE'}>NE</MenuItem>
                                    <MenuItem value={'SW'}>SW</MenuItem>
                                    <MenuItem value={'SE'}>SW</MenuItem>
                                    <MenuItem value={'NW-Central'}>NW-Central</MenuItem>
                                    <MenuItem value={'NE-Central'}>NE-Central</MenuItem>
                                    <MenuItem value={'SW-Central'}>SW-Central</MenuItem>
                                    <MenuItem value={'SE-Central'}>SW-Central</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="propertyType-simple">Property Type</InputLabel>
                                <Select
                                    value={propertyType}
                                    onChange={handlePtypeChange}
                                    inputProps={{
                                        name: 'propertyType',
                                        id: 'propertyType-simple',
                                    }}
                                >
                                    <MenuItem value={'Apartment'}>Apartment</MenuItem>
                                    <MenuItem value={'Condo'}>Condo</MenuItem>
                                    <MenuItem value={'House'}>House</MenuItem>
                                    <MenuItem value={'Townhouse'}>Townhouse</MenuItem>
                                </Select>
                            </FormControl>
                        </form>

                    </Paper>
                </Grid>
                {/* Report */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={props.fixedHeightPaper}>
                        <Report propertyType={propertyType} location={location} />
                    </Paper>
                </Grid>
                {/* Radial */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={props.fixedHeightPaper}>
                        <RadialChart />
                    </Paper>
                </Grid>
                {/* Radial */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={props.fixedHeightPaper}>
                        <RadialChart />
                    </Paper>
                </Grid>
                {/* Line Chart */}
                <Grid item xs={12} md={12} lg={12}>
                    <Paper className={props.fixedHeightPaper2}>
                        <LineChart propertyType={propertyType} location={location} />
                    </Paper>
                </Grid>
            </Grid>

        </React.Fragment>
    )

}
