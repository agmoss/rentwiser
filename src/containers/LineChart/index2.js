import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';

// Presentation Component
import LineChart from '../../components/LineChart';

const LineChartContainer = (props) => {

    const BASE_URL = 'https://api-cr.azurewebsites.net/api';

    const chartOptionsArea = {
        chart: {
            id: 'chartArea',
            toolbar: {
                autoSelected: 'pan',
                show: false
            },

        },
        colors: ['#546E7A'],
        stroke: {
            width: 3
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1,
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        }
    };

    const chartOptionsBrush = {
        chart: {
            id: 'chartBrush',
            brush: {
                target: 'chartArea',
                enabled: true
            },
            selection: {
                enabled: true,
            },
        },
        colors: ['#008FFB'],
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.91,
                opacityTo: 0.1,
            }
        },
        xaxis: {
            type: 'datetime',
            tooltip: {
                enabled: false
            }
        },
        yaxis: {
            tickAmount: 2
        },
    }

    const [series,updateSeries] = useState(

        [
            {
                name: "timeseries",
                data: []
            }
        ]

    )

    const timeSeries = (data) => {
        data = data.data['price']
        return Object.assign({}, ...Object.keys(data).map(k => ({
            [new Date(k)]: data[k]
        })));
    }


    useEffect(() => {
        async function fetchData() {
            const ts = await axios(`${BASE_URL}/ts/${props.location}/${props.community}/${props.propertyType}/1`);

            var data = timeSeries(ts);

            updateSeries(
                [
                    {
                        name: "timeseries",
                        data: data
                    }
                ]
            )

            props.updateLoading(false);
        }
        fetchData();
    }, [BASE_URL, series,props,props.location, props.community, props.propertyType]);


    return (
        React.createElement(LineChart, {
            chartOptionsArea: chartOptionsArea,
            chartOptionsBrush: chartOptionsBrush,
            series: series
        })
    )

}

export default LineChartContainer;