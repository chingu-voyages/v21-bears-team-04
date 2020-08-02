import React from "react";
import { Typography } from "../../../../components/Typography";
import { createUseStyles } from "react-jss";

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.text}>
          <Typography variant="h1">Privacy Policy</Typography>
          <br />
          <Typography variant="h4">
            Your privacy is a top concern at FitX. We never share or sell your
            data.
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

const useStyles = createUseStyles(styles, { name: "legal" });
