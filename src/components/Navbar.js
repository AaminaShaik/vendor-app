import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar({ setPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">E-Commerce</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn btn-link" onClick={() => setPage('home')}>Home</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-link" onClick={() => setPage('login')}>Login</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-link" onClick={() => setPage('register')}>Register</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
