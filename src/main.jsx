import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


import React from 'react';
import ReactDOM from 'react-dom/client';
import { ShoppingList } from './App.jsx';
import './styles.css'; // Importation propre du CSS

ReactDOM.createRoot(document.getElementById('app-container')).render(
  <React.StrictMode>
    <ShoppingList />
  </React.StrictMode>
);