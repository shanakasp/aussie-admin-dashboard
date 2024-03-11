import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/plugins/nucleo/css/nucleo.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/admin/index" replace />} />
    </Routes>
  </BrowserRouter>
);
