import React from 'react';
import ReactDOM from 'react-dom/client';
import { ShoppingList } from './App.jsx';
import './index.css'; // Importation propre du CSS

ReactDOM.createRoot(document.getElementById('app-container')).render(
  <React.StrictMode>
    <ShoppingList />
  </React.StrictMode>
);

