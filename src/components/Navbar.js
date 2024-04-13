import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((state) => state.amount);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        State bank of Ice Cream
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            
          </li>

          <li className="nav-item">
            
          </li>
        </ul>
        <div>
          <button className="btn-primary" disabled={true}>
            Your Balance is: {amount}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
