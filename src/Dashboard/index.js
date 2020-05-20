import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import Current from '../component/Birthday/Current';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));
  

export default function Home() {
  const classes = useStyles();


  return (
<div className={`${classes.root} content`}>
   <Grid container  direction="column" justify="center"  spacing={3}>
   <Grid item xs={12}>
   <Breadcrumbs aria-label="breadcrumb">
   <Typography color="textPrimary" className={classes.link}>
      <Link color="inherit" href="/"  className={classes.link}>
        <HomeIcon className={classes.icon} />
        Home
      </Link>
    </Typography>
    </Breadcrumbs>
    </Grid>
    <Grid item xs={12}>
    <Paper className={classes.paper}>
    <Typography variant="h4" gutterBottom>
      Today Celebrants
      </Typography>
       <Current /></Paper>
    </Grid>
    <Grid item xs={12}>
    <Paper className={classes.paper}>
    <Typography variant="h4" gutterBottom>
      Week Celebrants
      </Typography>
       <Current type="week" /></Paper>
    </Grid>
    <Grid item xs={12}>
    <Paper className={classes.paper}>
    <Typography variant="h4" gutterBottom>
      This Month Celebrants
      </Typography>
       <Current type="month" /></Paper>
    </Grid>
   

</Grid>

</div>
  );
}