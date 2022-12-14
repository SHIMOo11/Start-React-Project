import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
// import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './Component/Home/Home';
import Portfolio from './Component/Portfolio/Portfolio';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

let Router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement :<App/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"home" , element:<Home/>},
      {path:"portfolio" , element:<Portfolio/>},
      {path:"about" , element:<About/>},
      {path:"contact" , element:<Contact/>}

    ]
  }


])
root.render(
  <RouterProvider router={Router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
