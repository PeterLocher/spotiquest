import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  root: {
    flexGrow: 1
  }
};

class ProgressBar extends React.Component {
  // state = {
  //   completed: 0,
  // };

  // componentDidMount() {
  //   this.timer = setInterval(this.progress, 500);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  // progress = () => {
  //   const { completed } = this.state;
  //   if (completed === 100) {
  //     this.setState({ completed: 0 });
  //   } else {
  //     //console.log(this.props.duration.songLenght);
  //     //console.log(Object.keys(this.props.duration));
  //     const isAt = this.props.progrees * 100 / this.props.duration;
  //     //console.log(this.props.progrees, isAt);
  //     //console.log(diff, this.state.completed);
  //     this.setState({ completed: Math.min(isAt, 100) });
  //   }
  // };

  render() {
    const { classes } = this.props;
    //console.log(this.props.progrees)
    return (
      <div className={classes.root}>
        <LinearProgress color="secondary" variant="determinate" value={Math.min(this.props.progrees * 100 / this.props.duration, 100)} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProgressBar);
