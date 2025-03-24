import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home/home';
import ProductPage from './pages/ProductPage/productpage';
import MyListing from './pages/MyListing/myListing';
import ProductList from './pages/ProductList/productList';
import AboutUs from './pages/About/aboutUs';
import Contact from './pages/Contact/contact';
import MyWishList from './pages/MyWishlist/myWishList'
import CreateListing from './pages/CreateListing/createListing';
import reportWebVitals from './reportWebVitals';
import Admin from './pages/Admin/Adminpage/admin';
import AdminHomeAnalytic from './pages/Admin/AdminHomeAnalytic/adminHomeAnalytic';
import AdminUser from './pages/Admin/AdminUser/adminUser';
import AdminListing from './pages/Admin/AdminListing/adminListing';
import CreateAccount from './pages/CreateAccount/createAccount';
import Login from './pages/Login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/productpage" element={<ProductPage />}></Route>
        <Route exact path="/productdata/:productdataId" element={<ProductList />}></Route>
        <Route exact path="/aboutUs" element={<AboutUs />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/myListing" element={<MyListing />} ></Route>
        <Route exact path="/myWishList" element={<MyWishList />}></Route>
        <Route exact path="/categorydata/:categorydataID" element={<CreateListing />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
        <Route exact path="/adminHomeAnalytic" element={<AdminHomeAnalytic />}></Route>
        <Route exact path="/adminUser" element={<AdminUser />}></Route>
        <Route exact path='/adminListing' element={<AdminListing />}></Route>
        <Route exact path="/createAccount" element={<CreateAccount />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
