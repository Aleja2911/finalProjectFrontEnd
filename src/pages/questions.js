import React from 'react';
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';

const Questions = () => {
     const history = useHistory();

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
        <div>
       

 <main>    
            <ol>
                <li>
<Button onClick={handleClick}> 1.  help protect the environment   </Button>
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
            </ol>
            <Button onClick={handleReturn}> Return </Button>
            </main>   
        </div>
     );
}
 
export default Questions;
