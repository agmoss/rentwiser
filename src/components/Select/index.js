import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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

export const SelectDDL = (props) => {

    const classes = useStyles();

    /**
     * **Render the presentation component**
     */
    return (

        <React.Fragment>
            {/* Select Buttons */}
            <Grid item xs={12} md={12} lg={12}>
                <Paper>
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="propertyType-simple">Property Type</InputLabel>
                            <Select
                                value={props.propertyType}
                                onChange={props.handlePtypeChange}
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
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="propertyType-simple">Community</InputLabel>
                            <Select
                                value={props.community}
                                onChange={props.handleCommunityChange}
                                inputProps={{
                                    name: 'community',
                                    id: 'community-simple',
                                }}
                            >
                                <MenuItem value={'Beltline'}>Beltline</MenuItem>
                                <MenuItem value={'Downtown'}>Downtown</MenuItem>
                                <MenuItem value={'Bankview'}>Bankview</MenuItem>
                                <MenuItem value={'Mission'}>Mission</MenuItem>
                                <MenuItem value={'Bowness'}>Bowness</MenuItem>
                                <MenuItem value={'Killarney'}>Killarney</MenuItem>
                                <MenuItem value={'Lower_Mount_Royal'}>Lower Mount Royal</MenuItem>
                                <MenuItem value={'Crescent_Heights'}>Crescent Heights</MenuItem>
                                <MenuItem value={'Panorama_Hills'}>Panorama Hills</MenuItem>
                                <MenuItem value={'Eau_Claire'}>Eau Claire</MenuItem>
                                <MenuItem value={'Bridgeland'}>Bridgeland</MenuItem>
                                <MenuItem value={'Sunalta'}>Sunalta</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </Paper>
            </Grid>

        </React.Fragment>
    )

}
