import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDashboard } from "../../actions/feed";
import { Typography } from "../../components";
import { createUseStyles } from "react-jss";
import Feed from "./Feed";
import Charts from "./Charts";

export const _Dashboard = ({ auth: { token }, getDashboard }) => {
  const classes = useStyles();
  useEffect(() => {
    console.log("token", token);
    getDashboard(token);
  }, [token]);

  return (
    <div className={classes.root}>
      <div>
        <div>
          {" "}
          <Typography variant="h1" className={classes.header}>
            Dashboard
          </Typography>
        </div>

        <main>
          <section className={classes.feed}>
            <Feed />
          </section>
          <section className={classes.charts}>
            <Charts />
          </section>
        </main>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export const Dashboard = connect(mapStateToProps, { getDashboard })(_Dashboard);

export const styles = (theme) => ({
  root: {
    margin: theme.spacing(4, 0),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    "& > div": {
      margin: theme.spacing(4, 0),
    },
  },
  main: {
    width: "100%",
  },
  charts: {
    width: "30%",
    float: "right",
  },
  feed: {
    overflowY: "auto",
    textAlign: "center",
    padding: "20px",
    display: "inline-block",
  },
  header: {
    marginBottom: "15px",
    textAlign: "center",
  },
});

const useStyles = createUseStyles(styles, { name: "dashboard" });
