import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';

const element = document.getElementById('root') as HTMLElement;
const root = createRoot(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
