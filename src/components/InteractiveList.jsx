import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
//import DeleteIcon from "@material-ui/icons/Delete";
import SvgIcon from "@material-ui/icons/Delete";
//import priorityQueue from ''

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  }
});

class InteractiveList extends React.Component {
  generateSongs = () => {
    console.log(this.props.songs);
    //return

    return this.props.songs.map(s => (
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="dummyPhoto"
            src="https://source.unsplash.com/user/erondu/50x50"
            className={this.props.classes.avatar}
          />
        </ListItemAvatar>
        <ListItemText
          primary={s.element}
          secondary="Slayer"
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Upvote">
            <SvgIcon>
              <path d="./../pictures/baseline-thumb_up-24px.svg" />
            </SvgIcon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid>
          <div className={classes.demo}>
            <List dense={true}>
              {this.generateSongs()}
            </List>
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
