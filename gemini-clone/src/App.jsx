import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import './App.css';

import userIcon from './assets/user_icon.png';

window.addEventListener("DOMContentLoaded", () => {
  const userIconImg = document.querySelector(`img[src$="user_icon.png"]`);
  if (userIconImg) {
    userIconImg.style.cursor = 'pointer';
    userIconImg.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');
    });
  }
});


const App = () => {


  return (
    <>
      <Sidebar/>
      <Main/>  
    </>
  )
}

export default App
