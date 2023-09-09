import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin.js';

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

import Cart from './cart.js';
import Promotion from './Menu/promotion';
import Dessert from './Menu/dessertmenu';
import Dishmenu from './Menu/dishmenu';
import Snacksmenu from './Menu/snacksmenu';
import Drinkmenu from './Menu/drinkmenu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      
      
      <Route path="/test" element={<Test/>}></Route>
      <Route path="/table" element={<Table/>}></Route>
      <Route path="/menu/dish" element={<Dish/>}></Route>

      {/* หน้าต่างMenuต่างๆ */}
      <Route path="/menu/promotion" element={<Promotion/>}></Route>
      <Route path="/menu/dessert" element={<Dessert/>}></Route>
      <Route path="/menu/dishmenu" element={<Dishmenu/>}></Route>
      <Route path="/menu/snacksmenu" element={<Snacksmenu/>}></Route>
      <Route path="/menu/drinkmenu" element={<Drinkmenu/>}></Route>
      <Route path="/menu/cart" element={<Cart/>}></Route>

      {/* หน้าต่างadminต่างๆ */}
      <Route path="/admin" element={<Admin/>}></Route>
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
