import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDashboard } from "../actions/feed";
import { Typography, Button, Card } from "../components";
import { createUseStyles } from "react-jss";
import { addFollowing } from "../actions/following";


export const _Explore = ({ auth: { token }, users, followings}) => {
  useEffect(() => {
    console.log("token", token);
  }, [token]);
  console.log(users)
  const classes = useStyles();
  let msg = null;
  let valid = true;

  const handleNewFollower = (user) => {
    msg = `Now Following: @${user.username}`;
  };

  if(followings && followings.length){
  for (let i = 0; i < followings.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (followings[i].id ===users[i].id) {
        users = users.filter((user) => user.id !== followings[i].id);
      }
      valid = true;
    }
  }
}
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Explore
      </Typography>
      <Typography variant="h6">{msg}</Typography>
      {users.map((user) => (
        <Card className={classes.user} key={user.id}>
          <div>
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


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    users: state.users,
    followings: state.followings
  };
};

export const Explore = connect(mapStateToProps, { getDashboard })(_Explore);

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
