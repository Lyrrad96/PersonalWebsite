import React from 'react';
//import ReactDOM from 'react-dom';
//import './App.css';
//import Sidebar from './components/sidebar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Topbar from './components/topbar/Topbar'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import './app.scss'
import {useState} from "react";
import Menu from './components/menu/Menu';
import Game from './components/game/Game';

function App(){
  const [menuOpen, setMenuOpen] = useState(false)
  return(
    <div class="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Testimonials/>
        <Work/>
        <Game/>
        <Contact/>

      </div>
    </div>
  );
}

export default App;
