import React from 'react';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      
    </Routes>
    </BrowserRouter>
    </>
    
  );
};
  
export default App;
