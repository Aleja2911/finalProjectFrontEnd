import React, { useState, useEffect } from 'react';

const UseWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize)
    }, [])

    return windowWidth;
}
 
export default UseWindowWidth;