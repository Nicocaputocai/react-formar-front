import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { RecoverPassword } from "./pages/RecoverPassword";
import { ConfirmAccount } from "./pages/ConfirmAccount";
import { AuthLayout } from "./layouts/AuthLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedLayout } from "./layouts/ProtectedLayout";
import { Projects } from "./pages/Projects";
export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forget-password" element={<ForgotPassword />} />
            <Route
              path="recover-password/:token"
              element={<RecoverPassword />}
            />
            <Route path="confirm/:token" element={<ConfirmAccount />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
          {/* Rutas privadas */}
          <Route 
          path='/projects'
          element={<ProtectedLayout/>}
          >
            <Route
              index
              element={<Projects/>}
            />
        </Route>        
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
