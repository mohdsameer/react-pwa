import React, { useMemo, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom";

import { useAppSelector, useAppDispatch } from './redux/hook'
import { ApplicationData, storeApplicationData } from './redux/reducer/applicationSlice'

function App() {

  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    const email = "sameer@task.io"
    dispatch(storeApplicationData(email))
  },[])

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
