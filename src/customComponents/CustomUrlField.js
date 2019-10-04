import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const styles = {
  link: {
    textDecoration: 'none',
  },
  icon: {
    width: '0.5em',
    paddingLeft: 2,
    // paddingTop: 50
  },
  linkText: {
    display: "table-cell",
    verticalAlign: "middle"
  }
};

const MyUrlField = ({ record = {}, source, classes }) =>
  <a href={record[source]} className={classes.link}>
    <div className={classes.linkText}>
      {record[source]}
    </div>
    <div className={classes.linkText}>
      <LaunchIcon className={classes.icon} />
    </div>
  </a>;

export default withStyles(styles)(MyUrlField);
