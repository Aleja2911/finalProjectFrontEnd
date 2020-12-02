import React, { useState } from 'react'
import Trail from './Trail';

const HumanQuestionsText = () => {
    const [open, set] = useState(true)
    
    
    return ( 

        <Trail  open={open} onClick={() => set((state) => !state)}>
            <h1> to human questions: </h1> 
            <h1> what is human something human? </h1>
            
        </Trail>
    );
}
 
export default HumanQuestionsText;