import React from 'react';
import './urgentQuestions.css';

import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';


import AnimatedCardUrgent from '../components/animatedCardUrgent';
import UrgentQuestionsText from "../components/urgentQuestionsText";
import Grid from '@material-ui/core/Grid';

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


const UrgentQuestions = ({ scientists }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick=(e)=>{
        let path = `/humanquestions`;
        history.push(path)
        console.log("it works")
      }
      const handleReturn=(e)=>{
        let path = `/smallquestions`;
        history.push(path)
        console.log("it works")
      }
    return (  
      <Grid container direction="row" className="urgentQuestions">
          <Grid>
            <Button className={classes.button} onClick={handleReturn}> Return </Button>
          </Grid>

      
          <Grid>
            <AnimatedCardUrgent scientists={scientists} />
         </Grid>
        <Grid className={classes.text}>
            <UrgentQuestionsText />
        </Grid> 
          <Grid >
            <Button className={classes.button} onClick={handleClick}> Continue </Button>
          </Grid>
        </Grid>
    );
}
 
export default UrgentQuestions;

