import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginMock } from '../utils/auth'

export default function Login(){
  const [email,setEmail] = useState('test@emirate.com')
  const [password,setPassword] = useState('password123')
  const [error,setError] = useState('')
  const navigate = useNavigate()

  async function submit(e){
    e.preventDefault()
    try{
      loginMock(email,password)
      navigate('/dashboard')
    }catch(err){
      setError(err.message || 'Login failed')
    }
  }

  return (
    <section style={{maxWidth:480, margin:'0 auto'}}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        {error && <div role="alert" style={{color:'red'}}>{error}</div>}
        <div style={{display:'flex', gap:8, marginTop:8}}>
          <button type="submit">Login</button>
          <Link to="/"><button type="button" className="secondary">Back</button></Link>
        </div>
      </form>
      <p>Don't have an account? <Link to="/auth/signup">Sign up</Link></p>
    </section>
  )
}
