import React from "react";
// import './css/Header.css';
// import Logo from '../Logo.jpeg';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div>
        <button>
          <Link to="/" className="links">
            Home
          </Link>
        </button>
        <button>
          <Link to="/InfoPage" className="links">
            소개
          </Link>
        </button>
        <button>
          <Link to="/VRPage" className="links">
            VR
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
