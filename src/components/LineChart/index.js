import React, { Component } from 'react';

// Apexcharts
import ReactApexChart from 'react-apexcharts';

// MaterialUI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class LineChart extends Component {

    

    render() {

        console.log(this.props.series);

        return (

            <Grid item xs={12} md={12} lg={12}>
                <Paper className={this.props.fixedHeightPaper}>
                    <div id="lineCharts">
                        <div id="lineChart1">
                            <ReactApexChart options={this.props.chartOptionsArea} series={this.props.series} type="line" height="300" />
                        </div>
                        <div id="lineChart2">
                            <ReactApexChart options={this.props.chartOptionsBrush} series={this.props.series} type="area" height="100" />
                        </div>
                    </div>
                </Paper>
            </Grid>

        );
    }
}

export default LineChart;