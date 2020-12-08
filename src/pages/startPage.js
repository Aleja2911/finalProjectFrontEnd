import React from "react";
import "./css/startpage.css";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
  },
  text: {
    color: "white",
  },
}));

const StartPage = () => {
  const classes = useStyles();

  const history = useHistory();

  const handleClick = (e) => {
    let path = `/bigquestions`;
    history.push(path);
    console.log("it works");
  };
  return (
    <Grid container direction="column" className="startPage">
      <h1 className={classes.text}> Find Your Science </h1>

      <Button className={classes.button} onClick={handleClick}>
        {" "}
        Click to Start{" "}
      </Button>
    </Grid>
  );
};

export default StartPage;

// location.href = "www.yoursite.com";
