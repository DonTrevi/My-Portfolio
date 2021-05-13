
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar.js'
import NavBarMobile from './components/NavBarMobile/NavBarMobile.js'





export default function App(props) {

  return (
    <div>
      <div className="PC">
        <NavBar />
      </div>
      <div className="Telephone">
        <NavBarMobile />
      </div>
      {(props.lenguage === 'es') ? <h1>Bienvenidos!</h1> : <h1>Welcome!</h1>}

    </div>

  );
}
