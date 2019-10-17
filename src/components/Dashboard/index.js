import React, { useState } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Components
import { SelectDDL } from '../Select';
import PriceReportContainer from '../../containers/PriceReport';
import LineChartContainer from '../../containers/LineChart';
import MarketReportContainer from '../../containers/MarketReport';
import ScatterChartContainer from '../../containers/ScatterChart';


// Loading spinner
import LoadingOverlay from 'react-loading-overlay';

export const Dashboard = (props) => {

    const [location, setLocation] = useState('all');
    const [community, setCommunity] = useState('all');
    const [propertyType, setPropertyType] = useState('all');

    const [loading, setLoading] = useState(true);

    function handlePtypeChange(event) {
        setPropertyType(event.target.value)
    }

    // Not in use
    function handleLocationChange(event) {
        setLocation(event.target.value)
    }

    function handleCommunityChange(event) {
        setCommunity(event.target.value)
    }

    function updateLoading(status) {
        setLoading(status)
    }

    /**
     * **Render the presentation component**
     */
    return (

        <React.Fragment>

            {/* Loading Spinner */}
            <LoadingOverlay
                active={loading}
                styles={{
                    wrapper: {}
                }}
                spinner
                text='Loading ...'
            ></LoadingOverlay>

            <Grid container spacing={3}>

                {/* Select Buttons */}
                <SelectDDL location={location} community={community} propertyType={propertyType} handleLocationChange={handleLocationChange} handleCommunityChange={handleCommunityChange} handlePtypeChange={handlePtypeChange} />

                {/* Rental Price Report */}
                <PriceReportContainer fixedHeightPaper={props.fixedHeightPaper} location={location} community={community} propertyType={propertyType} updateLoading={updateLoading} />

                {/* Rental Market Report */}
                <MarketReportContainer fixedHeightPaper={props.fixedHeightPaper} location={location} community={community} propertyType={propertyType} updateLoading={updateLoading} />

                {/* Temporary */}
                <ScatterChartContainer fixedHeightPaper={props.fixedHeightPaper} location={location} community={community} propertyType={propertyType} updateLoading={updateLoading} />

                {/* Line Chart */}
                <LineChartContainer fixedHeightPaper={props.fixedHeightPaper} location={location} community={community} propertyType={propertyType} updateLoading={updateLoading}  />

            </Grid>

        </React.Fragment>

    )

}
