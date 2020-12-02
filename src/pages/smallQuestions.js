import React from 'react';
import './smallQuestions.css';

import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';


import AnimatedCardSmall from '../components/animatedCardSmall';
import SmallQuestionsText from "../components/smallQuestionsText";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 2,
  },
  button: {
    padding: 30,
    color: "white",
  },
  media: {
    height: 400,
  },
  text: {
    padding: 30,
  }
});


const SmallQuestions = ({ scientists }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick=(e)=>{
        let path = `/urgentquestions`;
        history.push(path)
        console.log("it works")
      }
      const handleReturn=(e)=>{
        let path = `/bigquestions`;
        history.push(path)
        console.log("it works")
      }
    return ( 
        <Grid container direction="row" className="smallQuestions">
          <Grid>
            <Button className={classes.button} onClick={handleReturn}> Return </Button>
          </Grid>

      
          <Grid>
            <AnimatedCardSmall scientists={scientists} />
         </Grid>
        <Grid className={classes.text}>
            <SmallQuestionsText />
        </Grid> 
          <Grid >
            <Button className={classes.button} onClick={handleClick}> Continue </Button>
          </Grid>
        </Grid>
     );
}

export default SmallQuestions;

// direction="column" 
//justify="center"
//container directions="column" alignItems="center"