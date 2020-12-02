import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


const ResultsPage = () => {
    const history = useHistory();

     const handleReturn=(e)=>{
         let path = `/questions`;
         history.push(path)
         console.log("it works")
       }
    return (

<div>
    <header>
    <Button onClick={handleReturn}> Return </Button>
    <h6> navBar </h6>
    </header>
    <main>
    <h1> This is the results page </h1>
    </main>
</div>

      );
}
 
export default ResultsPage;