import React from 'react';
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';


const StemProvides = () => {
    const history = useHistory();

    const handleClick=(e)=>{
        let path = `/questions`;
        history.push(path)
        console.log("it works")        
      }
    
    const handleReturn=(e)=>{
        let path = `/humanquestions`;
        history.push(path)
        console.log("it works")
      }
    return ( 
        <div>
            <p> STEM can provide you 
                with the tools to find 
                an answer to these and other 
                questions. 
                find your STEM and get to know some 
                of the women who have contributed to 
                these fields ...
            </p>
            <Button onClick={handleClick}> Continue </Button>
            <Button onClick={handleReturn}> Return </Button>
        </div>
     );
}
 
export default StemProvides;