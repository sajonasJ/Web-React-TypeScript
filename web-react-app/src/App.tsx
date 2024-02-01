// Import necessary libraries
import React, {useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Import components
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './body/Main';
import SignUp from './components/Signup';
import LandingPage from './body/Landing';

function App() {
  //unused email and password for now
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  
  return (
    <div className="App">
      <div className='App-top'>
        <Header />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;