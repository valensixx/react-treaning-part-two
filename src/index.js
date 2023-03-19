import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ItemList from './ItemList';
import './ItemList.css';
import LoginFormLv2 from './LoginFormLv2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ItemList/> 
    <LoginFormLv2 />
  </React.StrictMode>
);


