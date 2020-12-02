import React from 'react';
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';
import AnimatedCardHuman from '../components/animatedCardHuman';

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
        <div>
            <Button className={classes.button} onClick={handleReturn}> Return </Button>
            Human Questions:
            Virginia H. Holsinger
            Chemistry and Food Scientist
           
            <AnimatedCardHuman scientists={scientists} />
            <Button className={classes.button} onClick={handleClick}> Continue </Button>
            
        </div>
     );
}
 
export default HumanQuestions;