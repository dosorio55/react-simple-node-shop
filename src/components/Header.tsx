import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="main-header">
      <button id="side-menu-toggle">Menu</button>
      <nav className="main-header__nav">
        <ul className="main-header__item-list">
          <li className="main-header__item">
            <NavLink to="/shop">
              Shop
            </NavLink>
          </li>
          <li className="main-header__item">
            <NavLink to="/products">
              Products
            </NavLink>
          </li>
          <li className="main-header__item">
            <NavLink to="/cart">
              Cart
            </NavLink>
          </li>
          <li className="main-header__item">
            <NavLink to="/orders">
              Orders
            </NavLink>
          </li>
          <li className="main-header__item">
            <NavLink to="/admin/add-product">
              Add Product
            </NavLink>
          </li>
          <li className="main-header__item">
            <NavLink to="/admin/products">
              Admin Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
