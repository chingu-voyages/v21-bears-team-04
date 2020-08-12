import React from "react";
import { Typography } from "../../../../components/Typography";
import { createUseStyles } from "react-jss";

const Blog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h1">FitX Blog Coming Soon!</Typography>
      </div>
    </div>
  );
};

export default Blog;

const styles = (theme) => ({
  root: {
    margin: theme.spacing(4, 0),
    backgroundColor: theme.palette.background.default,
  },
  container: {
    padding: theme.spacing(2),
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const useStyles = createUseStyles(styles, { name: "product" });
