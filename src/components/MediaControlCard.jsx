import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProgressBar from './ProgressBar';

const styles = theme => ({
  card: {
    display: 'flex',
    borderRadius: '5px 5px 0px 0px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    margin: '0px 10px 10px 10px'
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.songData.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Slayer
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <ProgressBar />
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.songData.albumArt}
        title="Album cover"
      />
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);