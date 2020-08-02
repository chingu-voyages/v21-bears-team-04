import React from "react";
import { Typography, Button, Card } from "../components";
import { createUseStyles } from "react-jss";

//need to add list of users to follow

export const Explore = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">Explore</Typography>
      <Card className={classes.user}>
        User data
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          Follow
        </Button>
      </Card>
    </div>
  );
};

export const styles = (theme) => ({
  root: {
    margin: theme.spacing(4, 0),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& > div": {
      margin: theme.spacing(4, 0),
    },
  },
  user: {
    padding: "15px",
  },
  button: {
      marginLeft: '15px'
  }
});

const useStyles = createUseStyles(styles, { name: "explore" });
