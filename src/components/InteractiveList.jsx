import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
//import priorityQueue from ''

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0px 0px 5px 5px',
  },
  voting: {
    alignItems: "left"
  }
});

class InteractiveList extends React.Component {
  generateSongs = () => {
    console.log(this.props.songs);
    //return

    return this.props.songs.map(s => (
        <ListItem style={{ marginBottom: 8 + "px", marginTop: 8 + "px" }}>
          {/* <ListItemAvatar>
          <Avatar
            alt="dummyPhoto"
            src="https://source.unsplash.com/user/erondu/50x50"
            className={this.props.classes.avatar}
          />
        </ListItemAvatar> */}
          <ListItemText primary={<Typography noWrap style={{ fontSize: 16 + "px" }}>{s.element}</Typography>} />
          <ListItemSecondaryAction>
            {this.props.lock && s.element === this.props.songs[0].element ? "" : s.priority + 1}
            <IconButton
              aria-label="Upvote"
              onClick={() => this.props.upvote(s.element)}
            >
              {this.props.lock && s.element === this.props.songs[0].element ? this.getLock() : this.getArrow()}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
    ));
  };

  getArrow = () => {
    return (<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>);
  }

  getLock = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid>
          <div className={classes.demo}>
            <List dense={true}>{this.generateSongs()}</List>
          </div>
        </Grid>
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InteractiveList);
