import React, { useState } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

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

                {/* Select Buttons */}
                <SelectDDL location={location} community={community} propertyType={propertyType} handleLocationChange={handleLocationChange} handleCommunityChange={handleCommunityChange} handlePtypeChange={handlePtypeChange}  />

                {/* Rental Report */}
                <ReportContainer fixedHeightPaper={props.fixedHeightPaper} location={location} community={community} propertyType={propertyType} />

                {/* Radial Chart */}
                <RadialChartContainer fixedHeightPaper={props.fixedHeightPaper} location={location} community={community} propertyType={propertyType} />

                {/* Line Chart */}
                <LineChartContainer fixedHeightPaper={props.fixedHeightPaper} location={location} community={community} propertyType={propertyType} />


            </Grid>

        </React.Fragment>
    )

}
