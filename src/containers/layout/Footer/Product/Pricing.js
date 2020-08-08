import React from "react";
import { Typography } from "../../../../components/Typography";
import { createUseStyles } from "react-jss";

const Pricing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h1">Pricing:</Typography>
        <br />
        <Typography variant="h2">
          FitX is free to all users! Our mission is to empower everyone to be
          more fit and expand their fitness communities.{" "}
        </Typography>
      </div>
    </div>
  );
};

export default Pricing;

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
});

const useStyles = createUseStyles(styles, { name: "product" });
