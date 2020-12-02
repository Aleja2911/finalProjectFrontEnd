import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

import StartPage from './pages/startPage';
import BigQuestions from './pages/bigQuestions';
import SmallQuestions from './pages/smallQuestions';
import UrgentQuestions from './pages/urgentQuestions';
import HumanQuestions from './pages/humanQuestions';
import StemProvides from './pages/stemProvides';
import Questions from './pages/questions';
import ResultsPage from './pages/resultsPage';





const useStyles = makeStyles(theme=> ({
  particlesCanva: {
      position:"absolute"
  }
}))

const App = () => {
  const classes = useStyles();

  const [scientists, setScientists] =  useState([]);
  const [questions, setQuestions] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [scientistQuestions, setScientistQuestions] = useState([]);
  const [scientistPrograms, setScientistPrograms] = useState([]);
  
  useEffect(() => {
    fetch("https://find-your-science.herokuapp.com/scientists")
        .then((res) => res.json())
        .then((data) => setScientists(data))
        .catch((error) => console.log(error.message));
  }, []);

useEffect(() => {
  fetch("https://find-your-science.herokuapp.com/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.log(error.message));
}, []);

useEffect(() => {
  fetch("https://find-your-science.herokuapp.com/uniprograms")
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((error) =>  console.log(error.message))
}, []);

useEffect(()=> {
  fetch("https://find-your-science.herokuapp.com/questions/scientists")
      .then((res) => res.json())
      .then((data) => setScientistQuestions(data))
      .catch((error) => console.log(error.message))
}, []);

useEffect(() => {
  fetch("https://find-your-science.herokuapp.com/scientists/programs")
      .then((res) => res.json())
      .then((data) => setScientistPrograms(data))
      .catch((error) => console.log(error.message))
}, []);
  console.log(scientistPrograms)

  return (
    <div className="App">
      <Particles  canvas className={classes.particlesCanva} params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 600
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "star",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: "#b61924",
          background_image: "",
          background_position: "50% 50%",
          background_repeat: "no-repeat",
          background_size: "cover"
        }
      }}   
        /> 
    <main>

      <Switch>
      <Route
      
      path="/resultspage"
      render={(props) => (
        <ResultsPage {...props}/>
      )}
    />
      <Route
      
        path="/questions"
        render={(props) => (
          <Questions {...props}/>
        )}
      />

      <Route
      
        path="/stemprovides"
        render={(props) => (
        <StemProvides  {...props}/>
      )}
    />

     <Route  
      path="/humanquestions"
      render={(props) => (
        <HumanQuestions scientists={scientists}  {...props}/>
      )}
    />  
    <Route
      path="/urgentquestions"
      render={(props) => (
        <UrgentQuestions scientists={scientists} {...props}/>
      )}
    />

    <Route
        path="/smallquestions"
        render={(props) => (
          <SmallQuestions scientists={scientists} {...props}/>
        )}
      />


      <Route
        path="/bigquestions"
        render={(props) => (
          <BigQuestions scientists={scientists} {...props}/>
        )}
      />
      
      <Route
        exact
        path="/"
        render={(props) => (
          <StartPage {...props} />
        )}
      />
      
      </Switch>
     
      </main>
     
    </div>
  );
}

export default App;
