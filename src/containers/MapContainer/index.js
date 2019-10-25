import React, { Component } from 'react';

// Presentation Component
import Map from '../../components/Map';

class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.BASE_URL = 'https://api-cr.azurewebsites.net/api';
        this.state = {
            data: [],
        }
    }

    async componentDidMount() {
        await this.mapData();
    }

    async mapData() {
        var data = await this.getDataFor(`/map/all/all/all/1`, 'data');

        this.setState({
            data: data
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {

        // Prevent un necessary re-render
        if (nextProps.location !== this.state.location || nextProps.community !== this.state.community || nextProps.propertyType !== this.state.propertyType) {

            this.setState({ location: nextProps.location, community: nextProps.community, propertyType: nextProps.propertyType }, async () => {
                this.mapData();
            });
        }
    }

    /**
    * **Fetch data at specific endpoint and set state with resulting data.**
    *
    * @param {string} conversion - url extension ontop of base
    * @param {string} value - state variable to get data for
    * 
    * @return {Promise}
    */
    getDataFor(conversion, value) {
        return new Promise((resolve, reject) => {
            fetch(this.BASE_URL + conversion, {
                mode: 'cors'
            })
                .then(res => res.json())
                .then(d => {
                    if (value === 'data') {

                        return resolve(d)
                    }
                    else {
                        return resolve();
                    }
                }).catch((error) => {
                    return reject(error);
                })
        })
    }

    render() {
        return (
            React.createElement(Map, { mapData: this.state.data })
        )
    }
}

export default MapContainer;