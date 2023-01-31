import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {ForgotPassword} from './pages/ForgotPassword';
import {RecoverPassword} from './pages/RecoverPassword';
import {ConfirmAccount} from './pages/ConfirmAccount';
import {AuthLayout} from './layouts/AuthLayout';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<AuthLayout/>}
        >
          <Route
            index
            element={<Login/>}
          />
           <Route
            path='register'
            element={<Register/>}
          />
           <Route
            path='forget-password'
            element={<ForgotPassword/>}
          />
           <Route
            path='recover-password/:token'
            element={<RecoverPassword/>}
          />
          <Route
            path='confirm/:token'
            element={<ConfirmAccount/>}
          />
           <Route
            path='*'
            element={<h1>404 Not Found</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
