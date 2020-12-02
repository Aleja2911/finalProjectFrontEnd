import React from 'react';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';



import Card from '@material-ui/core/Card';

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
 


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const AnimatedCardHuman = ({ scientists }) => {
    const classes = useStyles();
    const [props, set] = useSpring(()=> ({xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 }}))
  
    return (

            <>
            <animated.div onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}>
                <Card className={classes.root}>
                    <img className={classes.media} src={scientists[19].picture} alt="sara seager"/>
                    <h2> {scientists[19].first_name}  {scientists[19].last_name}  - {scientists[19].area_expertise} </h2>
                </Card>

                </animated.div>
            </>
            
    );
}
 


export default AnimatedCardHuman; 