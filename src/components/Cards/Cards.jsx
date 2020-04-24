import React from 'react';
import classes from './Cards.module.scss';
import cx from 'classnames';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {


    if (!confirmed || !recovered || !deaths) {
        return <CircularProgress size={150} />
    }

    return (
        <div className={classes.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator='.'
                            />
                        </Typography>
                        <Typography color='textSecondary'>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant='body2'>
                            Number of active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator='.'
                            />
                        </Typography>
                        <Typography color='textSecondary'>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant='body2'>
                            Number of recoveries from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(classes.card, classes.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator='.'
                            />
                        </Typography>
                        <Typography color='textSecondary'>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant='body2'>
                            Number of deaths causes by COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
};

export default Cards;