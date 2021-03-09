import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//CSS
import './../CSS/Splash.css';


// images
import Autoglassjpeg from "./../assets/Images/autoglassjpeg.png";
import BackgroundImage from './../assets/Images/anant-jain-Bu1zj2WbjHE-unsplash.jpg';
import Pic1 from './../assets/Images/kristaps-ungurs-_mBwOJ3UBgo-unsplash.jpg';
import Pic3 from './../assets/Images/luca-baini-wwtSYc8p9cI-unsplash.jpg';
import Pic4 from './../assets/Images/toan-nguyen-erOCOv6BeT4-unsplash.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className = 'background'>
     
    <Container>
      
      <div className = 'logo'>
        <img
          src={Autoglassjpeg}
          alt="Auto Glass Depot"
          className="App-logo"
        ></img>
        </div>
        </Container>
       
        <Container className='SplashContainer'>
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img 
          src={Pic1}
          alt="Auto Glass Depot"
          className="App-logo"
        ></img></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img
          src={Pic4}
          alt="Auto Glass Depot"
          className="App-logo"
        ></img></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img
          src={Pic3}
          alt="Auto Glass Depot"
          className="App-logo"
        ></img></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h1>Contact things</h1>
          </Paper>
        </Grid>
      
        <Grid item sm={6}>
          <Paper className={classes.paper}><img
          src={Autoglassjpeg}
          alt="Auto Glass Depot"
          className="App-logo"
        ></img></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <h1>More information</h1>
          </Paper>
        </Grid>
      </Grid>
      
    </div>
    
    </Container>
    
    </div>
  );
}



