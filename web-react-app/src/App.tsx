import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './body/Main';

function App() {
  return (
    <div className="App">
      <div className='App-top'>
      <Header />
      <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
