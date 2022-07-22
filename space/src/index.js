import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.scss';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Destination from "./components/pages/Destination";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Destination />} />
          <Route path="/technology" element={<Destination />} />
      </Routes>
  </BrowserRouter>
);