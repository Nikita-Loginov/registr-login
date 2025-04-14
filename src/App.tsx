import { Routes, Route } from "react-router";

import { useFormStore } from "./store/form";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";


import "./styles/fonts.scss";
import "./styles/reset.scss";
import "./styles/global.scss";
import { Navigate } from "react-router";
import { ToastContainer } from "react-toastify";

export function App() {
  const { isAuthenticated } = useFormStore();

  return (
    <div className="wrapper">
      <div className="main">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
