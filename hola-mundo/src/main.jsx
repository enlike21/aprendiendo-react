import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {App} from './App';  // Importa el componente App
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <App />
);
