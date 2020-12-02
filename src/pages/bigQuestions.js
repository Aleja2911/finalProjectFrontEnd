import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory } from "react-router-dom";
import './bigQuestions.css';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import Card from '@material-ui/core/Card';

import SaraSeager from "../Images/SaraSeager.jpg";
import AnimatedCardBig from "../components/animatedCardBig";
import BigQuestionsText from "../components/bigQuestionsText";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      padding: 2,
     
    },
    media: {
      height: 440,
    },
    buttons:{
        padding: 30,
        color: "white",
    },
    text: {
        padding: 30,
        color: "white", 
    }
  });
  




const BigQuestions = ({ scientists }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick=(e)=>{
        let path = `/smallquestions`;
        history.push(path)
        console.log("it works")
      }

      const handleReturn=(e)=>{
        let path = `/`;
        history.push(path)
        console.log("it works")
      }
    return (  
        <Grid container direction="row"  className="bigQuestions">
          
            <Grid >
              <Button className={classes.buttons} onClick={handleReturn}> Return </Button>
            </Grid>
             <Grid>
              <AnimatedCardBig  scientists={scientists}/>
            </Grid>
            <Grid className={classes.text}>
              <BigQuestionsText />
            </Grid>
          
           <Grid >
              <Button className={classes.buttons} onClick={handleClick}> Continue </Button>
          </Grid>
           
        </Grid>
    );
}
 
export default BigQuestions;