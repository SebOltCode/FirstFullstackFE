import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './nav'; 
import FormPage from './FormPage'; 


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FormPage" element={<FormPage />} />
        
      </Routes>
    </Router>
  );
}


function Home() {
  return <div>Startseite</div>;
}

export default App;