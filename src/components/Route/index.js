import React, { useState, useEffect } from 'react';

import Home from '../../pages/Home';
import Login from '../../pages/Login';


const Route = ({ children }) => {
  const [ input, setInput ] = useState('');
  const [ routing, setRouting ] = useState(window.location.hash);
  const [ correctRoute, setCorrectRoute ] = useState(<Home />);

 
  

  const handleOnClick = (e) => {
    console.log(e.target.value);
    window.location.hash = e.target.value
    setRouting(r => window.location.hash);
  }
  useEffect(() => {
    const routes = {
      HOME: <Home />,
      LOGIN: <Login />
    }
    console.log(window.location.hash.replace('#', '').toUpperCase());
    console.log(routes[window.location.hash.replace('#', '').toUpperCase()]);
    setCorrectRoute(routes[window.location.hash.replace('#', '').toUpperCase()]);
  }, [routing]);
  return (
    <div>
      { correctRoute }
      <input value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="button" value="#LOGIN" onClick={handleOnClick}>Login</button>
      <button type="button" value="#HOME" onClick={handleOnClick}>Home</button>
    </div>
  );
};

export default Route;