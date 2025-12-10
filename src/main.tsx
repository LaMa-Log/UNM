import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n/i18n"; 
import Login from './components/admin/login.tsx';
import Dashboard from './components/admin/dash.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
