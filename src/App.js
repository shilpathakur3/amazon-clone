import React from 'react';
import './App.css';
// import { } from "react-router-dom"
// import Header from './Header'
// import { useStateValue } from "./StateProvider"
import { auth } from "./firebase"
import Login from './Login'


function App() {
  return (
    //BEM
    <div className="app">
     {/* <Header /> */}
     {/* Home */}
     <Login />
    </div>
  );
}

export default App;
