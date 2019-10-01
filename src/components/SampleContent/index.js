import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class SampleContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    {/* Content */}
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper >
                            <Typography variant="h1" align='center'>
                                {this.props.content}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default SampleContent;