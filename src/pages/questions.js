import React from 'react';
import { useHistory } from "react-router-dom";
import './questions.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
     button: {
       color: "white",
     },
     returnbutton: {
          margin: 50,
          color: "white",
     }
});

const Questions = ({ questions, scientistQuestions }) => {
     const history = useHistory();
     const classes = useStyles();

     const handleClick=(e)=>{
         let path = `/resultspage`;
         history.push(path)
         console.log("it works")
       }

     const handleReturn=(e)=>{
          let path = `/stemprovides`;
          history.push(path)
          console.log("it works")
        }

    return ( 
        <Grid  container direction="column" className="questions">
          <Grid className={classes.returnbutton} >
               <h2> What Would You Like To Do Today? </h2>
          </Grid>
          
          {questions && questions.map((question, index) => (
              <Grid> 
               
                         <Button className={classes.button} onClick={handleClick}> {question.question_name}  </Button>
                
               </Grid>
          ))}
   
            <Button className={classes.returnbutton} onClick={handleReturn}> Return </Button>
               
        </Grid>
     );
}
 
export default Questions;

 
{/* <ol>
<li>

</li>
<li>
<Button> 2. understand what is the universe made of  </Button> 
</li> 
<li>
<Button> 3.  know what is consciousness       </Button> 
</li>
<li>
<Button> 4.  help solve the world hunger  </Button> 
</li>
<li>
<Button>  5.  help cure diseases   </Button> 
</li>
<li>
<Button> 6.  know if there are other universes   </Button>
</li>
<li>
<Button> 7.  help find affordable clean energy   </Button>
</li>
<li>
<Button> 8. develop new technologies  </Button>   
</li>
<li>
<Button> 9.  help improve access to clean water and sanitation  </Button>   
</li>
</ol> */}