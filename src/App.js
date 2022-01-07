import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Timer from './Timer';
import TextDisplay from './TextDisplay.js';
import TextInput from './TextInput';

import Button from 'react-bootstrap/Button';

import { initializeApp } from 'firebase/app';

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
  return (
    <div className='App'>
      <h1 className='Title'>SpeedTyper</h1>
      <Timer />
      <div className='Container'>
        <TextDisplay />
        <TextInput />
      </div>
    </div>
  )
}

export default App;