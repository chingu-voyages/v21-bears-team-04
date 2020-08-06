import React from "react";
import { Typography, Button, Card } from "../components";
import { createUseStyles } from "react-jss";


export const Explore = () => {
  const classes = useStyles();
  let msg = null;
  let valid = false;
  let following = [{ id: 1, name: "Maggie", username: "maggie" }];
  let dummyusers = [
    { id: 1, name: "Maggie", username: "maggie" },
    { id: 2, name: "Tyler", username: "tyler" },
    { id: 3, name: "Sarah", username: "sarah" },
  ];

  const handleNewFollower = (user) => {
    following.push(user);
    msg = `Now Following: @${user.name}`;
  };

  for (let i = 0; i < following.length; i++) {
    for (let j = 0; j < dummyusers.length; j++) {
      if (following[i].id === dummyusers[i].id) {
        dummyusers = dummyusers.filter((user) => user.id !== following[i].id);
      }
      valid = true;
    }
  }
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Explore
      </Typography>
      <Typography variant="h6">{msg}</Typography>
      {dummyusers.map((user) => (
        <Card className={classes.user} key={user.id}>
          <div>
            <Typography variant="h4">{user.name}</Typography>
            <Typography variant="overline">@{user.username}</Typography>
          </div>
          <Button
            onClick={() => handleNewFollower(user)}
            className={classes.button}
            variant="contained"
            color="secondary"
            disabled={!valid}
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
    marginBottom: "15px",
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
