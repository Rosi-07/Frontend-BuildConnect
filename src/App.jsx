import React from 'react';
import routes from './routes/Routes';
import { Routes } from 'react-router-dom';
import "../src/index.css";
import i18n from './pages/translate/i18n';

export default function App() {
 
  return (
    <>
    <Routes>
      {routes}
    </Routes>
  </>
  );
};
