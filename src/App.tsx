import { Routes, Route, Navigate } from "react-router";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { useFormStore } from "./store/form";

import { auth } from "./firebase";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";

import "./styles/fonts.scss";
import "./styles/reset.scss";
import "./styles/global.scss";
import { SignIn } from "./pages/SignIn";

export function App() {
  const { isAuthenticated, setIsAuthenticated } = useFormStore();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setEmail(user.email)
      } else {
        setIsAuthenticated(false);
      }

      setLoading(false)
    });



    return () => unsubscribe();
  }, [setIsAuthenticated]);

  if (loading) {
    console.log('dadas')
    return <p>Загрузка...</p>
  }

  return (
    <div className="wrapper">
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Home email={email}/> : <Navigate to="/login" replace />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
