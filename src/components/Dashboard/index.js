import React, { useState } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Components
import {SelectDDL} from '../Select';
import PriceReport from '../../containers/PriceReport';
import LineChartContainer from '../../containers/LineChart';
import MarketReport from '../MarketReport';
import ScatterChartContainer from '../../containers/ScatterChart';

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

    /**
     * **Render the presentation component**
     */
    return (

        <React.Fragment>

            <Grid container spacing={3}>

                {/* Select Buttons */}
                <SelectDDL location={location} community={community} propertyType={propertyType} handleLocationChange={handleLocationChange} handleCommunityChange={handleCommunityChange} handlePtypeChange={handlePtypeChange}  />

                {/* Rental Price Report */}
                <PriceReport fixedHeightPaper={props.fixedHeightPaper} location={location} community={community} propertyType={propertyType} />

                {/* Rental Market Report */}
                <MarketReport fixedHeightPaper={props.fixedHeightPaper} location={location} community={community} propertyType={propertyType} />

                {/* Temporary */}
                <ScatterChartContainer fixedHeightPaper={props.fixedHeightPaper} location={location} community={community} propertyType={propertyType} />

                {/* Line Chart */}
                <LineChartContainer fixedHeightPaper={props.fixedHeightPaper} location={location} community={community} propertyType={propertyType} />

            </Grid>

        </React.Fragment>

    )

}
