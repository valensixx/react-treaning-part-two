import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ItemList from './ItemList';
import './ItemList.css';
import LoginFormLv2 from './LoginFormLv2';
import CheckBox from './CheckBox';
import HelloName from './HelloName';
import SpecialBtn from './SpecialBtn';
import DropDownMenu from './DropDownMenu';
import ComponentList from './ComponentList';
import InputForm from './InputForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ItemList/> 
    <LoginFormLv2 />
    <CheckBox />
    <HelloName/>
    <SpecialBtn/>
    <DropDownMenu/>
    <ComponentList/>
    <InputForm />
  </React.StrictMode>
);


