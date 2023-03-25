import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import AuthDetails from './components/AuthDetails';

function App() {
  return (
    <div className="App">
      <Signin/>
      <Signup/>
      <AuthDetails />
    </div>
  );
}

export default App;
