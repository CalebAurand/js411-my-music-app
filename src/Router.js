import React from 'react';

//here is where we are importing to the two main components we need from the React Router package
import { Routes, Route } from 'react-router-dom';

//Local imports. Import components we build ourselves
// import Home from './Home';
import Dashboard from './components/Dashboard';
import App from './App';
import About from './components/About';
// import Profile from './components/Profile';

{ /* Then we use Routes and Route. Routes acts like a regular JS Switch* Statement */}
{/* depending on the path in the URL, one of these Routes will be returned and their component rendered */}
const Router = () => {
  return (
    
    <Routes>
      <Route path="/*" element={<App />}/>
      <Route path="/dash" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

//Don't forget to export your newly created Router component
export default Router;