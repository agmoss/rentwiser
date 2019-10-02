import React, { useState, useEffect } from 'react';
import axios from 'axios';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Title from '../Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  // card: {
  //   minWidth: 275,
  //   minHeight: 150
  // },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Report(props) {

  const classes = useStyles();

  const [mean, setMean] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const responseMean = await axios(`https://api-cr.azurewebsites.net/api/price/mean/${props.location}/${props.community}/${props.propertyType}/1`);
      setMean(responseMean.data.val);
      const responseMin = await axios(`https://api-cr.azurewebsites.net/api/price/min/${props.location}/${props.community}/${props.propertyType}/1`);
      setMin(Number(responseMin.data.val));
      const responseMax = await axios(`https://api-cr.azurewebsites.net/api/price/max/${props.location}/${props.community}/${props.propertyType}/1`);
      setMax(Number(responseMax.data.val));
    }
    fetchData();
  }, [props.location, props.community, props.propertyType]); // Or [] if effect doesn't need props or state (place query here)

  return (
    <React.Fragment>

      <Card className={classes.card}>
        <CardContent>
          <Title className={classes.title} color="primary" gutterBottom>
            Report
          </Title>

          <Typography  variant="h6">
            Mean
          </Typography>

          <Typography variant='subtitle1'>
            {(mean).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </Typography>

          <Typography  variant="h6">
            Max
          </Typography>

          <Typography >
            {(max).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </Typography>

          <Typography  variant="h6">
            Min
          </Typography>

          <Typography >
            {(min).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </Typography>

        </CardContent>

        <CardActions>
          <Typography color="textSecondary" className={classes.depositContext}>
            {new Date().getTime()}
          </Typography>
        </CardActions>

      </Card>

    </React.Fragment>
  );
}