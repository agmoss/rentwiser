import React, { Component } from 'react';

// Apexcharts
import ReactApexChart from 'react-apexcharts';

// MaterialUI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class ScatterChart extends Component {

    render() {
        return (

            <Grid item xs={12} md={6} lg={6}>
                <Paper className={this.props.fixedHeightPaper}>
                    <ReactApexChart options={this.props.options} series={this.props.series} type="scatter" height="300" />
                </Paper>
            </Grid>

        );
    }
}

export default ScatterChart;