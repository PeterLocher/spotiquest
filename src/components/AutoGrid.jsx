import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SpotifyQueue from "./../components/SpotifyQueue";
import SearchBar from "./../components/SearchBar";
import CurrentlyPlaying from "./../components/CurrentlyPlaying";
import InteractiveList from "./../components/InteractiveList";
import CustomizedInputBase from "./../components/CustomizedInputBase";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
          <CurrentlyPlaying/>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);