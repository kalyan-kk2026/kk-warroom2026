import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Layout from './components/Layout'

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('war_room_user')
    return saved ? JSON.parse(saved) : null
  })

  const handleLogin = (role, name, mobile) => {
    const u = { role, name, ...(mobile && { mobile }) }
    setUser(u)
    localStorage.setItem('war_room_user', JSON.stringify(u))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('war_room_user')
  }

  return (
    <Routes>
      <Route path="/login" element={
        user ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />
      } />
      <Route path="/" element={
        user ? <Layout user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />
      }>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
