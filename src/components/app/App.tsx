import React from 'react';
import './App.css';
import Home from '../home';
import Header from '../header';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
};

export default App;
