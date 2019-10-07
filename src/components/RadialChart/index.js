import React, { Component } from 'react';

// Apexcharts
import ReactApexChart from 'react-apexcharts';

// MaterialUI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class RadialChart extends Component {


    render() {
        return (

            <Grid item xs={12} md={4} lg={3}>
                <Paper className={this.props.fixedHeightPaper}>
                    <ReactApexChart options={this.props.options} series={this.props.series} type="radialBar" height="200" />
                </Paper>
            </Grid>

            // <div id="radialChart">
            //     <ReactApexChart options={this.props.options} series={this.props.series} type="radialBar" height="200" />
            // </div>

        );
    }
}

export default RadialChart;