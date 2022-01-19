import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Timer from './Timer';
import TextQuote from './TextQuote.js';


import { initializeApp } from 'firebase/app';

import { Button } from 'react-bootstrap';

const firebaseConfig = {
  apiKey: "AIzaSyCqbqJcbImOB6Eseqx8MFqVlVRRBZ0JViQ",
  authDomain: "speedtypertest.firebaseapp.com",
  projectId: "speedtypertest",
  storageBucket: "speedtypertest.appspot.com",
  messagingSenderId: "62338836692",
  appId: "1:62338836692:web:6559bd28c192ee5c6ef341"
};

const app = initializeApp(firebaseConfig);

const gameStateDictionary = {
  before: 'Before',
  started: 'Started',
  ended: 'Ended'
};

const defaultTimerTime = 10

function App() {
  const [gameState, setGameState] = useState(gameStateDictionary.before)
  const [timerValue, setTimerValue] = useState(defaultTimerTime)
  const [wordCount, setWordCount] = useState(defaultTimerTime)

  useEffect(() => {
    if (gameState === gameStateDictionary.started) {
      const timer = setInterval(() => {
        setTimerValue((value) => {
          const newValue = value -1;
          if(newValue === 0) {
            setGameState(gameStateDictionary.ended)
          }
          return newValue;
        })
      }, 1000);

      return () => {
        clearInterval(timer)
      }
      
    }
  }, [gameState])




  const getScreen = () => {
    switch (gameState) {
      case gameStateDictionary.before:
        return (
          <div>
            <h1>Press start to begin test and see how fast you can type!</h1>
            <Button variant="primary" size="lg" onClick={() => setGameState(gameStateDictionary.started)}>Start</Button>
          </div>)
      case gameStateDictionary.started:
        return (<div>
          <Timer value={timerValue} />
          <div className='Container'>
            <TextQuote setWordCount={setWordCount}/>
          </div>
        </div>)
      case gameStateDictionary.ended:
        return (<div>
          <h1>Your test results</h1>
          <h2>WPM: {wordCount}</h2>
        </div>)
    }
  }

  return (
    <div className='App'>
      <h1 className='Title'>SpeedTyper</h1>
      {getScreen()}
    </div>
  )
}

export default App;