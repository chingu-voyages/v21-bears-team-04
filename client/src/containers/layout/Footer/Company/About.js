import React from "react";
import { Typography } from "../../../../components/Typography";
import { createUseStyles } from "react-jss";

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.text}>
          <Typography variant="h1">About Us</Typography>
          <br />
          <Typography variant="h3">
            FitX is a social fitness app designed to motivate users to stay fit
            and expand their fitness communities.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;

const styles = (theme) => ({
  root: {
    margin: theme.spacing(4, 0),
    backgroundColor: theme.palette.background.default,
  },
  container: {
    padding: theme.spacing(2),
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    width: "70%",
  },
});

const useStyles = createUseStyles(styles, { name: "company" });
