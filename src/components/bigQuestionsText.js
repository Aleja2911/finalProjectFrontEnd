import React, { useState } from 'react'
import Trail from './Trail';

const BigQuestionsText = () => {
    const [open, set] = useState(true)
    
    
    return ( 

        <Trail  open={open} onClick={() => set((state) => !state)}>
            <h1> from big questions such as: </h1> 
            <h1> what is the universe made of? </h1>
            
        </Trail>
    );
}
 
export default BigQuestionsText;