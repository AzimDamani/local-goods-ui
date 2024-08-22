import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [user, setUser] = useState("customer");
  const location = useLocation();

    useEffect(() => {
        
        if (location.pathname.includes("/vendor")) {
            setUser("vendor");
        } else {
            setUser("customer");
        }
    }, [location]);
  return (
    <div className="navbar">
      <Link className="link" to="/">
        <div className="logo">Local Goods</div>
      </Link>
      <input
        className="search-bar"
        type="text"
        placeholder="Search product..."
        name="input"
        id=""
      />
      <div className="user-links">
        {user === "customer" ? (
          <>
            <Link className="link" to="/">
              My Cart
            </Link>
            <Link className="link" to="/">
              My Orders
            </Link>
            <button className="login-btn">Login/Sign up</button>
          </>
        ) : (
          <>
            <Link className="link" to="/">
              My Products
            </Link>
            <Link className="link" to="/">
              Add Product
            </Link>
            <button className="login-btn">Login/Sign up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
