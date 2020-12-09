import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  bar: {
    color: "white",
    background: "linear-gradient(45deg, #04053C 30%, #43156B 70%)",
    boxShadow: "0 3px 5px 2px",
  },
  button: {
    width: 120,
    height: 90,
    margin: 2,
    paddingTop: 20,
    paddingBottom: 20,
    color: "white",
    background: "none",
    "&:hover": {
      background: "#CD9C22",
    },
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(-1),
  },
  typography: {
    fontFamily: "Playfair Display",
  },
  typographyButton: {
    fontFamily: "Playfair Display",
    fontSize: 14,
  },
  returnResults: {
    
    color: "white",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();


  const handleReturn = (e) => {
    let path = `/questions`;
    history.push(path);
    console.log("it works");
  };

  const handleClick = (e) => {
    let path = `/aboutus`;
    history.push(path);
    console.log("it works");
  };

  const handleClickMissing = (e) => {
    let path = `/missingscientist`;
    history.push(path);
    console.log("it works");
  };
  const handleReturnResults = (e) => {
    let path = `/resultspage`;
    history.push(path);
    console.log("it works");
  };

  return (
    <AppBar className={classes.bar}>
      <Toolbar>
        <Grid>
          <Button
            className={classes.returnResults}
            onClick={handleReturnResults}
          >
            <Typography className={classes.typography} variant="h4">
              Find Your Science
            </Typography>
          </Button>
        </Grid>
        <Grid container direction="row" justify="flex-end" alignItems="center" >
         
          <Button variant="outlined" className={classes.button} onClick={handleReturn}>
           <Typography className={classes.typographyButton}>
            return to Questions
            </Typography>
          </Button>
          
          
            <Button
              className={classes.button}
              variant="outlined"
              onClick={handleClick}
            >
              <Typography className={classes.typographyButton}>
                About Us
              </Typography>
            </Button>
          

          
            <Button
              className={classes.button}
              variant="outlined"
              onClick={handleClickMissing}
            >
              <Typography className={classes.typographyButton}>
                Missing a Scientists?
              </Typography>
            </Button>
          
            <Button className={classes.button} variant="outlined">
              <Typography className={classes.typographyButton}>
                Missing a university program?
              </Typography>
            </Button>
          
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
