import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDashboard } from "../actions/feed";
import { Typography, Button, Card } from "../components";
import { createUseStyles } from "react-jss";
import { createAndAddFollowing } from "../actions/following";


export const _Explore = ({ auth: { token }, users, following}) => {
  useEffect(() => {
    console.log("token", token);
  }, [token]);
  console.log(following)
  const classes = useStyles();
  let valid = false;

  const handleNewFollower = (followingId) => {
    createAndAddFollowing(followingId)
    console.log(following)
  };

  if(following && following.length){
  for (let i = 0; i < following.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (following[i].id ===users[i].id) {
        users = users.filter((user) => user.id !== following[i].id);
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
      {users.map((user) => (
        <Card className={classes.user} key={user.id}>
          <div>
            <Typography variant="overline">@{user.username}</Typography>
          </div>
          <Button
            onClick={() => handleNewFollower(user.id)}
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