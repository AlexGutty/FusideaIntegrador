import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * Entrada principal de la aplicación React.
 * 
 * Este archivo se encarga de renderizar la aplicación principal (`App`) dentro del elemento `root` en el HTML.
 * Utiliza `React.StrictMode` para ayudar a identificar problemas potenciales en la aplicación durante el desarrollo.
 * 
 * @returns {JSX.Element} - Renderiza la aplicación en el DOM dentro del contenedor `root`.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
