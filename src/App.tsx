import React from 'react';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

