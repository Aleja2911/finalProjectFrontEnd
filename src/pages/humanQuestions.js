import React from 'react';
import './humanQuestions.css';
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import AnimatedCardHuman from '../components/animatedCardHuman';
import HumanQuestionsText from '../components/humanQuestionsText';

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

const HumanQuestions = ({ scientists } ) => {
  const classes = useStyles();
    const history = useHistory();

    const handleClick=(e)=>{
        let path = `/stemprovides`;
        history.push(path)
        console.log("it works")
      }
      const handleReturn=(e)=>{
        let path = `/urgentquestions`;
        history.push(path)
        console.log("it works")
      }
   
    return ( 
      <Grid container direction="row" className="humanQuestions">
            <Grid>
              <Button className={classes.button} onClick={handleReturn}> Return </Button>
            </Grid>   
            <Grid>
              <AnimatedCardHuman scientists={scientists} />
            </Grid>
            <Grid className={classes.root}>
             <HumanQuestionsText />
            </Grid>
            <Grid>
              <Button className={classes.button} onClick={handleClick}> Continue </Button>
            </Grid>
        </Grid>
     );
}
 
export default HumanQuestions;