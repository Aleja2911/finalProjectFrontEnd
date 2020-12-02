import React from 'react';
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
  const scientists = [
    {
      "id": 1,
      "first_name": "Eugenie",
      "last_name": "Clark",
      "area_expertise": "Ichthyologist",
      "field": [
        "Biology"
      ],
      "issue_tackled": [
        "Environmental preservation"
      ],
      "wiki_link": "https://en.wikipedia.org/wiki/Eugenie_Clark",
      "picture": "http://www.alertdiver.com/cdn/13649.jpg",
      "short_description": null
    },
    {
      "id": 2,
      "first_name": "Susan",
      "last_name": "Solomon",
      "area_expertise": "Atmospheric Chemist",
      "field": [
        "Chemistry"
      ],
      "issue_tackled": [
        "Environmental preservation",
        "Chemistry"
      ],
      "wiki_link": "https://en.wikipedia.org/wiki/Susan_Solomon",
      "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Susan_Solomon-Desk_With_Globe.jpg/1024px-Susan_Solomon-Desk_With_Globe.jpg",
      "short_description": null
    },
    {
      "id": 11,
      "first_name": "Lydia",
      "last_name": "Villa-Komaroff",
      "area_expertise": "Molecular Biology",
      "field": [
        "Biology"
      ],
      "issue_tackled": [
        "Materials development"
      ],
      "wiki_link": "https://en.wikipedia.org/wiki/Lydia_Villa-Komaroff",
      "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lydia_Villa-Komaroff-2.jpg/220px-Lydia_Villa-Komaroff-2.jpg",
      "short_description": null
    },
  ];
  const classes = useStyles()

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
