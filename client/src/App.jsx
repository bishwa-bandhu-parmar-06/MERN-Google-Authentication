import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import AuthForm from './Components/AuthForm'
import ForgotPassword from './Components/ForgotPassword'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<AuthForm type="login" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App