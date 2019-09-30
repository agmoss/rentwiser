import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Report(props) {

  const classes = useStyles();

  const [mean, setMean] = useState('-')
  const [min, setMin] = useState('-')
  const [max, setMax] = useState('-')

  useEffect(() => {
    async function fetchData() {
      const responseMean = await axios(`https://api-cr.azurewebsites.net/api/price/mean/${props.location}/${props.propertyType}/1`);
      setMean(responseMean.data.val);
      const responseMin = await axios(`https://api-cr.azurewebsites.net/api/price/min/${props.location}/${props.propertyType}/1`);
      setMin(responseMin.data.val);
      const responseMax = await axios(`https://api-cr.azurewebsites.net/api/price/max/${props.location}/${props.propertyType}/1`);
      setMax(responseMax.data.val);
    }
    fetchData();
  }, [props.location, props.propertyType]); // Or [] if effect doesn't need props or state (place query here)

  return (
    <React.Fragment>
      <Title>Report</Title>
      <Typography component="p" variant="h4">
        {mean}
      </Typography>
      <Typography component="p" variant="h4">
        {max}
      </Typography>
      <Typography component="p" variant="h4">
        {min}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {new Date().getTime()}
      </Typography>
    </React.Fragment>
  );
}