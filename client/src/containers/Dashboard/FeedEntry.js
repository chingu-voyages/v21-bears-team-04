import React, { useState } from "react";
import { Avatar } from "../../components/Avatar";
import { createUseStyles } from "react-jss";
import FeedDetails from "./FeedDetails";

const FeedEntry = ({ activity, user, category }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Avatar size="small" src="images/default_avatar_image.png" />
      <div className={classes.detailsIcon} onClick={handleDetailsClick}></div>
      <h6 className={classes.username}>{user.username}</h6>
      <h5 className={classes.title}>{activity.title}</h5>
      <h6>{category && category.name}</h6>
      {showDetails && <FeedDetails activity={activity} />}
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

  detailsIcon: {
    width: "20px",
    height: "20px",
    background: `url(${"/images/details_icon.png"}) no-repeat center/cover`,
    float: "right",
    marginRight: "5px",
  },
});

const useStyles = createUseStyles(styles, { name: "feedEntry" });

export default FeedEntry;
