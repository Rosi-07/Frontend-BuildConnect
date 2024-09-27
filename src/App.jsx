import React from 'react';
import routes from './routes/Routes';
import { Routes } from 'react-router-dom';
import "../src/index.css";


export default function App() {
 
  return (
    <>
    <Routes>
      {routes}
    </Routes>
  </>
  );
};
