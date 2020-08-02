import React from "react";
import { Typography, Button, Card } from "../components";
import { createUseStyles } from "react-jss";

export const Explore = () => {
  const classes = useStyles();

  //need to add list of users to follow
  const users = [
    { id: 1, name: "Maggie", username: "maggie" },
    { id: 2, name: "Tyler", username: "tyler" },
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>Explore</Typography>
      {users.map((user) => (
        <Card className={classes.user} key={user.id}>
          <div>
            <Typography variant="h4">{user.name}</Typography>
            <Typography variant="overline">@{user.username}</Typography>
          </div>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Follow
          </Button>
        </Card>
      ))}
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
      margin: theme.spacing(2, 0),
    },
  },
  title: {
      marginBottom: '15px',
  },
  user: {
    padding: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "225px",
  },
  button: {
    marginRight: "0",
  },
});

const useStyles = createUseStyles(styles, { name: "explore" });
