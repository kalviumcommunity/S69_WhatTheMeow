// client/src/App.jsx
import React from 'react';
import './App.css';
import CatCard from './components/catCard';

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>🐾WhatTheMeow</h1>
        <p>Weird Cats. Punny captions. Endless smiles.</p>
        <button>Explore Gallery</button>
      </header>

      <div className='cat-gallery'>
        <CatCard name="whiskey" image="https://www.shutterstock.com/image-photo/skeptic-surprised-cat-thinking-dont-600nw-1905929728.jpg" caption="just an expressive cat lol"></CatCard>
      </div>
    </div>
  );
}

export default App;