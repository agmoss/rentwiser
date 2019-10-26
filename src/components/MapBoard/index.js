import React, { useState } from 'react';

// Components
import { SelectDDL } from '../Select';
import MapContainer from '../../containers/MapContainer';

export const MapBoard = (props) => {

    const [location, setLocation] = useState('all');
    const [community, setCommunity] = useState('all');
    const [propertyType, setPropertyType] = useState('all');

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

    /**
     * **Render the presentation component**
     */
    return (
        <React.Fragment>
            <SelectDDL location={location} community={community} propertyType={propertyType} handleLocationChange={handleLocationChange} handleCommunityChange={handleCommunityChange} handlePtypeChange={handlePtypeChange} />
            <MapContainer location={location} community={community} propertyType={propertyType} />
        </React.Fragment>
    )

}
