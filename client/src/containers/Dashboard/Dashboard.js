import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDashboard } from "../../actions/feed";
import { Typography } from "../../components";
import { createUseStyles } from "react-jss";
import { Container, Row, Col } from "react-bootstrap";
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
      <Container>
        <Row>
          {" "}
          <Typography variant="h1" className={classes.header}>
            Dashboard
          </Typography>
        </Row>
        <Row>
          <Col>
            <Feed />
          </Col>
          <Col>
            <Charts />
          </Col>
        </Row>
      </Container>
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
    alignItems: "center",

    "& > div": {
      margin: theme.spacing(4, 0),
    },
  },
  header: {
    marginBottom: "15px",
  },
});

const useStyles = createUseStyles(styles, { name: "dashboard" });
