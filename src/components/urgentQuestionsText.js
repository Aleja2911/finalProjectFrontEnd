import React, { useState } from 'react'
import Trail from './Trail';

const UrgentQuestionsText = () => {
    const [open, set] = useState(true);
    
    
    return ( 

        <Trail  open={open} onClick={() => set((state) => !state)}>
            <h1> to urgent ones: </h1> 
            <h1> something something urgent is urgent?  </h1>
            {/* <h1> is there anything smaller than a Quark in the universe? </h1> */}
            
        </Trail>
    );
}
 
export default UrgentQuestionsText;