import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Product from './Components/Product.js'
import ProductItem from './Components/ProductItem'
import About from './Components/About'
import Navbar from './Components/Navbar.js'


export default function RouterConfig() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path={'/'} element={<Product/>} />
          <Route path={'/about'} element={<About/>} />
          <Route path={'*'} element={<h1>404 - Page Not Found </h1>}/>
          <Route exact path={'/product/:id'} element={<ProductItem/>} />
        </Routes>
      </Router>
    </div>
  )
}
