import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin.js';
import Cart from './cart.js';
import Menu from './Menu.js';
import Test from './Component/test.js';
import Table from './Component/Table';
import Dish from './Component/dish';
import Mgmenu from './managermenu.js';
import Mgcategories from './managercategories.js';
import Foodtable from './Foodtable.js';
import Fooditem from './Fooditem.js';
import Promo from './Promotion.js';
import Mgmember from './managermember.js';
import Store from './Storesales';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/test" element={<Test/>}></Route>
      <Route path="/table" element={<Table/>}></Route>
      <Route path="/menu/dish" element={<Dish/>}></Route>

      {/* หน้าต่างadminต่างๆ */}
      <Route path="/admin/managermenu" element={<Mgmenu/>}></Route>
      <Route path="/admin/managercategories" element={<Mgcategories/>}></Route>
      <Route path="/admin/Foodtable" element={<Foodtable/>}></Route>
      <Route path="/admin/Fooditem" element={<Fooditem/>}></Route>
      <Route path="/admin/Promotion" element={<Promo/>}></Route>
      <Route path="/admin/managermember" element={<Mgmember/>}></Route>
      <Route path="/admin/Storesales" element={<Store/>}></Route>
      

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
