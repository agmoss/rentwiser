import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        location: '',
        propertyType: '',
        name: '--',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.offsetWidth);
    }, []);

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="location-simple">Location</InputLabel>
                <Select
                    value={values.location}
                    onChange={handleChange}
                    inputProps={{
                        name: 'location',
                        id: 'location-simple',
                    }}
                >

                    <MenuItem value={'NW'}>NW</MenuItem>
                    <MenuItem value={'NE'}>NE</MenuItem>
                    <MenuItem value={'SW'}>SW</MenuItem>
                    <MenuItem value={'SE'}>SW</MenuItem>
                    <MenuItem value={'NW-Central'}>NW-Central</MenuItem>
                    <MenuItem value={'NE-Central'}>NE-Central</MenuItem>
                    <MenuItem value={'SW-Central'}>SW-Central</MenuItem>
                    <MenuItem value={'SE-Central'}>SW-Central</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="propertyType-simple">Property Type</InputLabel>
                <Select
                    value={values.propertyType}
                    onChange={handleChange}
                    inputProps={{
                        name: 'propertyType',
                        id: 'propertyType-simple',
                    }}
                >
                    <MenuItem value={'Apartment'}>Apartment</MenuItem>
                    <MenuItem value={'Condo'}>Condo</MenuItem>
                    <MenuItem value={'House'}>House</MenuItem>
                    <MenuItem value={'Townhouse'}>Townhouse</MenuItem>
                </Select>
            </FormControl>
        </form>
    );
}