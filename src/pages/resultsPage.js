import React, {useState, Fragment} from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Pagination from '@material-ui/lab/Pagination';

import AnimatedCardResults from "../components/animatedCardResults";
import NavBar from "../components/navBar";

//----- pop up ----

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles({
  button: {
    color: "white",
  },
  media: {
    height: 200,
  },
  grid:{
    height: "100%",
  }
});

const ResultsPage = ({
  scientistQuestions,
  selectedQuestion,
  setOpen,
  open,
  setselectedScientist,
  selectedScientist,
  setselectedPrograms,
  scientistsPerPage,
  setCurrentPage,
  currentPage
}) => {
  const history = useHistory();
  const classes = useStyles();
  
  
  const handleClickOpen = (sq) => {
    setselectedScientist(sq);
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };

  const handleWikiClick = (selectedScientist) => {
    let path = window.open(selectedScientist.wiki_link);
    history.push(path);
  };

  const handleUniPrograms = (e) => {
    setselectedPrograms(selectedScientist.id);
    let path = `/careerpath`;
    history.push(path);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  //-- pagination
  const [page, setPage ] = useState(1)

  // const handlePagination = scientistQuestions => {
  //   const slicedscientistQuestions = scientistQuestions.slice(page === 1 ? 0 : (page - 1) * 10, page === 1 ? 10 : ((page - 1) * 10) + 10)
  //   return slicedscientistQuestions
  // }

// const indexOfLastScientist = currentPage * scientistsPerPage;
// const indexOfFirstScientist = indexOfLastScientist - scientistsPerPage;
// const currentScientists = scientistQuestions
// .filter((sq) => sq.question_id === selectedQuestion)
// .map((sq, i).slice(indexOfFirstScientist, indexOfLastScientist)

  return (
    <Grid>
      <NavBar />
<div    style={{marginTop: '250px'}}>
      
      <h1> Meet the Women </h1>

      <Grid container direction="row" justify="center" alignItems="center" className={classes.grid} >
        {scientistQuestions &&
          scientistQuestions
            .filter((sq) => sq.question_id === selectedQuestion)
            .map((sq, i) => {
              return (
                <Fragment   key={i}>
                  <Button 
                    color="primary"
                    onClick={() => handleClickOpen(sq)}
                  >
                    <AnimatedCardResults
                      sq={sq}
                      setOpen={setOpen}
                      open={open}
                    />
                  
                  </Button>
                  {selectedScientist && (
                    <Dialog
                      fullScreen={fullScreen}
                      open={open}
                      element={selectedScientist}
                      onClose={handleClose}
                      aria-labelledby="responsive-dialog-title"
                    >
                      <DialogTitle id="responsive-dialog-title">
                        {" "}
                        {selectedScientist.first_name}{" "}
                        {selectedScientist.last_name}{" "}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          <img
                            className={classes.media}
                            src={selectedScientist.picture}
                            alt="scientist woman working"
                          />
                          some short description about the scientitst should go
                          here
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                        <Button
                          onClick={() => handleWikiClick(selectedScientist)}
                        >
                          learn more about {selectedScientist.first_name}{" "}
                          {selectedScientist.last_name}
                        </Button>
                        <Button
                          onClick={handleUniPrograms}
                        >
                          follow her career path!
                        </Button>
                      </DialogActions>
                    </Dialog>
                  )}
                  
                </Fragment>
              );
            })}
            
      </Grid>
      </div>
    </Grid>
  );
};

export default ResultsPage;

/* <Paginations scientistQuestions={scientistQuestions.length} paginate={paginate} scientistsPerPage={scientistsPerPage}   /> */
//<Pagination count={Math.floor(scientistQuestions.length / 10)} onChange={(e, page) => setPage(page)} />