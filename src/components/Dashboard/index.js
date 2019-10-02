import React, { useState } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Components
import {SelectDDL} from '../Select';
import ReportContainer from '../../containers/Report';
import LineChartContainer from '../../containers/LineChart';
import RadialChartContainer from '../../containers/RadialChart';

export const Dashboard = (props) => {

    const [location, setLocation] = useState('all');
    const [community, setCommunity] = useState('all');
    const [propertyType, setPropertyType] = useState('all');


    function handlePtypeChange(event) {
        setPropertyType(event.target.value)
    }

    function handleLocationChange(event) {
        setLocation(event.target.value)
    }

    function handleCommunityChange(event) {
        setCommunity(event.target.value)
    }

    // console.log(location)
    // console.log(community)
    // console.log(propertyType)

    /**
     * **Render the presentation component**
     */
    return (

        <React.Fragment>
            <Grid container spacing={3}>

                <SelectDDL location={location} community={community} propertyType={propertyType} handleLocationChange={handleLocationChange} handleCommunityChange={handleCommunityChange} handlePtypeChange={handlePtypeChange}  />
                {/* Report */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={props.fixedHeightPaper}>
                        <ReportContainer location={location} community={community} propertyType={propertyType} />
                    </Paper>
                </Grid>
                {/* Radial */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={props.fixedHeightPaper}>
                        <RadialChartContainer location={location} community={community} propertyType={propertyType} />
                    </Paper>
                </Grid>
                {/* Line Chart */}
                <Grid item xs={12} md={12} lg={12}>
                    <Paper className={props.fixedHeightPaper2}>
                        <LineChartContainer location={location} community={community} propertyType={propertyType} />
                    </Paper>
                </Grid>
            </Grid>

        </React.Fragment>
    )

}
