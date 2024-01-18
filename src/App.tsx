import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*<h1>Hello Homepage</h1>*/}
      <br/>
      <Link to="/">Home</Link> {" | "}
      <Link to="/about">About</Link> {" | "}
      <Link to="/contact">Contact</Link>
      <br/>
      <Outlet />
    </div>
  );
}

export default App;
