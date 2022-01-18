import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Timer from './Timer';
import TextDisplay from './TextDisplay.js';
import TextInput from './TextInput';

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

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  return (
    <div className='App'>
      <h1 className='Title'>SpeedTyper</h1>
      {gameStarted ? (
          <div>
          <Timer />
          <div className='Container'>
            <TextDisplay />
            <TextInput />
          </div>
        </div>
      ) : (
        <div>
          <h2>Press start to begin test and see how fast you can type!</h2>
          <Button variant="primary" size="lg" onClick={() => setGameStarted(true)}>Start</Button>
        </div>
      ) }
      </div>
  )
}

export default App;