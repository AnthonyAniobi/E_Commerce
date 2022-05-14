import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigationbar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Errorpage from './pages/Errorpage';

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
