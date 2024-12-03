import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
Punto de entrada de la aplicación que monta el componente `App` en el DOM.
 * 
 * Este archivo usa `createRoot` para inicializar la aplicación React en el contenedor con el id 'root',
 * y se renderiza dentro del modo estricto de React para advertir sobre prácticas no recomendadas.
 * 
 * @returns {void} No retorna ningún valor.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
