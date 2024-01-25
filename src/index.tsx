import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelmetConfig from './config/HelmetConfig';
import { HelmetProvider } from 'react-helmet-async';
import * as Pages from "./pages";
import { relativeurl } from './pluginurl'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store, presistor } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

const helmetContext = {};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log("Pages",Pages)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
        <HelmetProvider context={helmetContext}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <HelmetConfig />
              <Routes>
                <Route path="/" element={<App />}>
                  {Object.entries(Pages).map(([componentName, Component]) => {
                    let data = relativeurl.filter(item => item.includes(componentName.toLowerCase()))
                    return <Route
                      key={componentName}
                      path={data?.length > 0 ? data[0] : `/${componentName.toLowerCase()}`}
                      element={<Component />}
                    />
                  })}
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
