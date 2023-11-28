import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppThemeContext } from './theme'
import { useContext } from 'react'

import AppLayout from './ui/AppLayout'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Team from './pages/Team'
import Contacts from './pages/Contacts'
import Invoices from './pages/Invoices'
import Form from './pages/Form'
import Calendar from './pages/Calendar'
import Faq from './pages/Faq'
import Bar from './pages/Bar'
import Pie from './pages/Pie'
import Line from './pages/Line'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import User from './pages/User'

function App() {
  const { theme } = useContext(AppThemeContext)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/user" element={<User />}></Route>
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
