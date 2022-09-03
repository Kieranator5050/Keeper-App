import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// eslint-disable-next-line no-unused-vars
import styles from "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);