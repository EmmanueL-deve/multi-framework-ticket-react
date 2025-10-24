import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, logout } from '../utils/auth'

export default function Header(){
  const navigate = useNavigate();
  const auth = isAuthenticated();
  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  }
  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <div><Link to="/"><strong>TicketApp — EMIRATE</strong></Link></div>
        <nav aria-label="Main Navigation">
          {auth ? (
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/tickets">Tickets</Link>
              <button onClick={handleLogout} className="secondary">Logout</button>
            </div>
          ) : (
            <div style={{display:'flex',gap:8}}>
              <Link to="/auth/login">Login</Link>
              <Link to="/auth/signup">Get Started</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
