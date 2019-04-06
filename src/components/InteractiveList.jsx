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
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}); 

function generate(element) {
  return [0, 1, 2, 3, 4].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

class InteractiveList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid>
          <div className={classes.demo}>
            <List dense={true}>
              {generate(
                <ListItem className="FuckDig">
                  <ListItemAvatar>
                  <Avatar alt="dummyPhoto" src="https://source.unsplash.com/user/erondu/50x50" className={classes.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Raining Blood"
                    secondary={true ? "Slayer" : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
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
