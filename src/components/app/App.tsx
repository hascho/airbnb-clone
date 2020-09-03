import React from 'react';
import './App.css';
import Home from '../home';
import Header from '../header';
import Footer from '../footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
