import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Stuff!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">About</Link> |{" "}
        <Link to="/misc">Misc</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
