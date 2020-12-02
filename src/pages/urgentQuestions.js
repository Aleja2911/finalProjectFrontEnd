import React from 'react';
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';
import AnimatedCardUrgent from '../components/animatedCardUrgent';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 2,
  },
  button: {
    color: "white",
  },
  media: {
    height: 400,
  },
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
        <div>

        <Button className={classes.button} onClick={handleReturn}> Return </Button>

          <AnimatedCardUrgent scientists={scientists} />
            Urgent questions:
            Frances Hamilton Arnold / Chemical Engineer
        <Button className={classes.button} onClick={handleClick}> Continue </Button>
       
        </div>
    );
}
 
export default UrgentQuestions;