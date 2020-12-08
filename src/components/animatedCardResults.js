import React from "react";
import { useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

// import PopUpButton from './popupbutton';

// //----- pop up ----

// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 145,
    minWidth: 145,
    padding: "none",
    fontSize: 10,
    marginLeft: 15,
   
  },
  button: {
    color: "white",
  },
  media: {
    height: 200,
  },
});

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const AnimatedCardResults = ({ sq, setOpen, open, scientistQuestions }) => {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  // const [currentScientist, setCurrentScientist] = useState(null);
  //   const handleClickOpen = () => {
  //       setOpen(true);
  //   };
  //   const handleClose = (e) => {
  //     setOpen(false);
  // }

  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Card className={classes.root}>
            <img
              className={classes.media}
              src={sq.picture}
              alt="scientist woman working"
            />
            <h2>
              {sq.first_name} {sq.last_name} 
            </h2>
            <h3> {sq.area_expertise} </h3>
            
            click me
          </Card>
        </animated.div>
      </Grid>
    </>
  );
};
//<PopUpCard handleClose={handleClose} open={open} />

export default AnimatedCardResults;
