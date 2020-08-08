import React from "react";
import { Avatar } from "../../components/Avatar";
import { createUseStyles } from "react-jss";

const FeedEntry = ({ activity, user, category }) => {
  const classes = useStyles();
  return (
    <div clasSName={classes.container}>
      <Avatar size="small" src="/images/default_avatar_image.png" />
      <h6 className={classes.username}>{user.username}</h6>
      <h5 className={classes.title}>{activity.title}</h5>
      <h6>{category && category.name}</h6>
    </div>
  );
};

export const styles = (theme) => ({
  username: {
    float: "left",
  },
  title: {
    alignText: "center",
    marginRight: "20px",
    marginLeft: "20px",
  },
  container: {
    width: "100%",
  },
});

const useStyles = createUseStyles(styles, { name: "feedEntry" });

export default FeedEntry;
