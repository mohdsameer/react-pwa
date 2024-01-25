import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from './redux/hook'
import { storeApplicationData } from './redux/reducer/applicationSlice'
import { toggleDarkmode } from './redux/reducer/themeSlice'

interface Window {
  myMethod: () => void;
}

function App() {

  (window as any).getList = () => {
    const data = {
      name: "Mohd Sameer",
      description:"sameer@task.io"
    }
    return data
  };

  const dispatch = useAppDispatch()
  const mode = useAppSelector((state) => state.mode.isDarkmode)
  
  useEffect(()=>{
    (window as any).myCustomProperty = "sameer@task.io"
    const email = "mohdsameer@task.io"
    dispatch(storeApplicationData(email))
  },[dispatch])

  const darkMode = () => {
    dispatch(toggleDarkmode())
  }

  return (
    <div className="App">
      {/*<h1>Hello Homepage</h1>*/}
      <div className= {`${mode ? "blacktheme" : "whitetheme" }`} >
        <br/>
        <Link to="/">Home</Link> {" | "}
        <Link to="/about">About</Link> {" | "}
        <Link to="/contact">Contact</Link> {" | "}
        <Link to="/chat/hello">Hello</Link> {" | "}
        <Link to="/chat/support">Support</Link>
        <br/>
        <br/>
        <button onClick={darkMode} className="darkmodebutton"> { mode ? 'Light mode' : 'Dark mode' } </button>
        <br/>
        <Outlet />
      </div>
    </div>
  );
}

export default App;