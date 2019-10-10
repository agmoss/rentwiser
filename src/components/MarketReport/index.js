import React from 'react';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

// Components
import RadialChartContainer from '../../containers/RadialChart';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    card: {
        minWidth: 275,
        minHeight: '100%'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 1,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

export default function MarketReport(props) {

    const classes = useStyles();

    return (

        <Grid item xs={12} md={4} lg={3}>

            <Card className={classes.card}>

                <CardHeader 
                    color="primary"
                    title="Market Report"
                />

                <CardMedia>
                    <RadialChartContainer location={props.location} community={props.community} propertyType={props.propertyType} />
                </CardMedia>

                <CardActions>
                    <Typography color="textSecondary" className={classes.depositContext}>
                        Active Listings: {(props.active).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
                    <Typography color="textSecondary" className={classes.depositContext}>
                        Total Listings: {(props.total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
                </CardActions>

            </Card>

        </Grid>

    );
}