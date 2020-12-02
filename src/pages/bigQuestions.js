import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory } from "react-router-dom";
import './bigQuestions.css';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import Card from '@material-ui/core/Card';

import SaraSeager from "../Images/SaraSeager.jpg";
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
        padding: 20,
        color: "white",
    },
    text: {
        padding: 30,
        color: "white", 
    }
  });
  


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const BigQuestions = ({ scientists }) => {
    const classes = useStyles();
    const [props, set] = useSpring(()=> ({xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 }}))
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
        <Grid className="bigQuestions">
          
          <Grid >
            <Button className={classes.buttons} onClick={handleReturn}> Return </Button>
           </Grid>
            <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}>

            
            <Card className={classes.root}>
            <img className={classes.media} src={SaraSeager} alt="sara seager"/>
            <h2> Sara Seager - Astronomer </h2>
            </Card>
            
            </animated.div>
            
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