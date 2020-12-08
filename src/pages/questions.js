import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/questions.css";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
// import ScientistCard from '../components/scientist'

const useStyles = makeStyles({
  button: {
    color: "white",
    margin: 2,
    background: "none",
    "&:hover": {
      background: "#CD9C22",
    },
  },
  typography: {
     fontFamily: "Playfair Display",
     fontSize: '0.9rem',
  },
  questionsList: {
   
    
  },
  returnbutton: {
    margin: 50,
    color: "white",
  },
});

const Questions = ({ questions, scientistQuestions, setselectedQuestion }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = (question) => {
    setselectedQuestion(question.id);
    let path = `/resultspage`;
    history.push(path);
  };

  const handleReturn = (e) => {
    let path = `/stemprovides`;
    history.push(path);
    console.log("it works");
  };

  return (
    <Grid container direction="column" className="questions">
      <Grid className={classes.returnbutton}>
        <h2> What Would You Like To Do Today? </h2>
      </Grid>

      {questions &&
        questions.map((question, index) => (
          <Grid key={index} className={classes.questionsList}>
            <Button
              color="primary"
              variant="outlined"
              className={classes.button}
              
              onClick={() => handleClick(question)}
            >
              <Typography  className={classes.typography}>
              {question.question_name}
              </Typography>
            </Button>
          </Grid>
        ))}

      <Button className={classes.returnbutton} onClick={handleReturn}>
        {" "}
        Return{" "}
      </Button>
    </Grid>
  );
};

export default Questions;
